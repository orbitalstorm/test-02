"use client";

import { GameSnapshot } from "@/types/game";
import { soundManager } from "@/lib/game/audio";
import { Volume2, VolumeX, LogOut, Flame, Bomb, Zap, Skull } from "lucide-react";
import { useState } from "react";

interface GameHeaderProps {
  snapshot: GameSnapshot;
  currentPlayerId: string | null;
  onLeave: () => void;
}

const SLOT_BORDER_CLASSES = ["border-blue-500", "border-red-500", "border-green-500", "border-yellow-500"];

export function GameHeader({ snapshot, currentPlayerId, onLeave }: GameHeaderProps) {
  const [muted, setMuted] = useState(false);
  const players = Object.values(snapshot.players);

  const handleToggleSound = () => {
    const isNowMuted = soundManager.toggleMute();
    setMuted(isNowMuted);
  };

  return (
    <div className="w-full flex flex-wrap items-center justify-between gap-4 px-4 py-3 bg-stone-900/90 border border-stone-800 rounded-2xl backdrop-blur-md shadow-xl">
      <div className="flex flex-wrap items-center gap-2.5">
        {players.map((p) => {
          const isMe = p.id === currentPlayerId;
          const borderClass = SLOT_BORDER_CLASSES[p.slot] || "border-stone-600";
          return (
            <div
              key={p.id}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 transition-all ${borderClass} ${
                p.alive ? "bg-stone-800/80" : "bg-stone-950/60 opacity-40 grayscale"
              } ${isMe ? "ring-2 ring-amber-400" : ""}`}
            >
              {!p.alive ? (
                <Skull className="w-4 h-4 text-rose-500" />
              ) : (
                <span className="font-bold text-xs font-mono text-stone-100">{p.name}</span>
              )}
              {p.alive && (
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-stone-300 ml-1">
                  <span className="inline-flex items-center text-amber-400" title="Bombes restantes">
                    <Bomb className="w-3 h-3 mr-0.5" />
                    {p.bombsMax - p.bombsActive}/{p.bombsMax}
                  </span>
                  <span className="inline-flex items-center text-orange-400" title="Portée flamme">
                    <Flame className="w-3 h-3 mr-0.5" />
                    {p.flameRadius}
                  </span>
                  <span className="inline-flex items-center text-yellow-400" title="Vitesse">
                    <Zap className="w-3 h-3 mr-0.5" />
                    {p.speed.toFixed(1)}
                  </span>
                  {p.kickCount > 0 && (
                    <span className="inline-flex items-center px-1 rounded bg-amber-950/80 text-[10px]" title="Coup de pied actif">
                      👟{p.kickCount > 1 ? `x${p.kickCount}` : ""}
                    </span>
                  )}
                  {p.punchCount > 0 && (
                    <span className="inline-flex items-center px-1 rounded bg-blue-950/80 text-[10px]" title="Coup de poing actif">
                      🥊{p.punchCount > 1 ? `x${p.punchCount}` : ""}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleToggleSound}
          className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
          title={muted ? "Activer le son" : "Couper le son"}
        >
          {muted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
        </button>

        <button
          onClick={onLeave}
          className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
          title="Quitter la partie"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
