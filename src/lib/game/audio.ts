import { SoundEvent } from "@/types/game";

class AudioManager {
  private ctx: AudioContext | null = null;
  private isMuted = false;

  private initCtx(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  private playTone(type: OscillatorType, startF: number, endF: number, dur: number, vol = 0.25): void {
    if (this.isMuted) return;
    const ctx = this.initCtx();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(startF, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(endF, ctx.currentTime + dur);
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + dur);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + dur);
  }

  public playPlant(): void {
    this.playTone("sine", 320, 120, 0.12, 0.2);
  }

  public playKick(): void {
    this.playTone("sine", 150, 300, 0.09, 0.25);
  }

  public playPunch(): void {
    this.playTone("triangle", 200, 550, 0.18, 0.3);
  }

  public playDeath(): void {
    this.playTone("sawtooth", 300, 60, 0.35, 0.25);
  }

  public playExplosion(): void {
    if (this.isMuted) return;
    const ctx = this.initCtx();
    if (!ctx) return;
    const bufferSize = ctx.sampleRate * 0.35;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(800, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.35);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.4, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start();
  }

  public playPowerUp(): void {
    if (this.isMuted) return;
    const ctx = this.initCtx();
    if (!ctx) return;
    [330, 440, 550, 660].forEach((freq, idx) => {
      setTimeout(() => this.playTone("triangle", freq, freq * 1.05, 0.08, 0.15), idx * 50);
    });
  }

  public playMalus(): void {
    if (this.isMuted) return;
    const ctx = this.initCtx();
    if (!ctx) return;
    [400, 300, 200].forEach((freq, idx) => {
      setTimeout(() => this.playTone("sawtooth", freq, freq * 0.8, 0.1, 0.18), idx * 70);
    });
  }

  public playSound(type: SoundEvent["type"]): void {
    if (type === "plant") this.playPlant();
    else if (type === "explosion") this.playExplosion();
    else if (type === "powerup" || type === "victory") this.playPowerUp();
    else if (type === "malus") this.playMalus();
    else if (type === "kick") this.playKick();
    else if (type === "punch") this.playPunch();
    else if (type === "death" || type === "gameover") this.playDeath();
  }
}

export const soundManager = new AudioManager();
