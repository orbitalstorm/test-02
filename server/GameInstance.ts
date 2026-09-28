import { BombState, GameSnapshot, GameStatus, PlayerState, PowerUpItem, FlameState } from "../src/types/game";
import { BOMB_FUSE_MS, PLAYER_SLOTS } from "../src/lib/game/constants";
import { generateInitialGrid } from "../src/lib/game/grid";
import { computePlayerMovement } from "../src/lib/game/physics";
import { detonateDueBombs, checkEntitiesHit } from "./explosions";
import {
  checkPowerUpPickups,
  evaluateGameOver,
  isPlayerOverlappingCell,
  updateBombsPassability,
} from "./gameRules";
import { tryKickBomb, tryPunchBomb, updateMovingBombs } from "./bombMechanics";

export class GameInstance {
  public roomId: string;
  public status: GameStatus = "waiting";
  public tickCount = 0;
  public grid: number[][];
  public players: Record<string, PlayerState> = {};
  public bombs: BombState[] = [];
  public flames: FlameState[] = [];
  public powerUps: PowerUpItem[] = [];
  public winnerId: string | null = null;
  public onSound?: (type: "plant" | "explosion" | "powerup" | "malus" | "kick" | "punch" | "death" | "gameover" | "victory") => void;

  constructor(roomId: string) {
    this.roomId = roomId;
    this.grid = generateInitialGrid();
  }

  public resetRound(): void {
    this.grid = generateInitialGrid();
    this.bombs = [];
    this.flames = [];
    this.powerUps = [];
    this.winnerId = null;
    this.status = "playing";

    for (const player of Object.values(this.players)) {
      const slot = PLAYER_SLOTS[player.slot];
      player.x = slot.spawnCol + 0.5;
      player.y = slot.spawnRow + 0.5;
      player.alive = true;
      player.bombsMax = 1;
      player.bombsActive = 0;
      player.flameRadius = 2;
      player.speed = 3.6;
      player.kickCount = 0;
      player.punchCount = 0;
      player.direction = "idle";
      player.isMoving = false;
    }
  }

  public plantBomb(playerId: string): void {
    if (this.status !== "playing") return;
    const player = this.players[playerId];
    if (!player || !player.alive || player.bombsActive >= player.bombsMax) return;

    const cellX = Math.floor(player.x);
    const cellY = Math.floor(player.y);
    if (this.bombs.some((b) => b.cellX === cellX && b.cellY === cellY && !b.flying)) return;

    const overlapping = Object.values(this.players)
      .filter((p) => isPlayerOverlappingCell(p, cellX, cellY))
      .map((p) => p.id);

    this.bombs.push({
      id: `bomb_${Date.now()}_${playerId}`,
      cellX,
      cellY,
      plantedBy: playerId,
      timer: BOMB_FUSE_MS,
      flameRadius: player.flameRadius,
      passableFor: overlapping,
    });
    player.bombsActive++;
    this.onSound?.("plant");
  }

  public punchBomb(playerId: string): void {
    if (this.status !== "playing") return;
    const player = this.players[playerId];
    if (!player || !player.alive) return;
    const ok = tryPunchBomb(player, this.bombs, this.grid);
    if (ok) this.onSound?.("punch");
  }

  public update(deltaMs: number): void {
    if (this.status !== "playing") return;
    this.tickCount++;

    for (const player of Object.values(this.players)) {
      if (!player.alive || player.direction === "idle") continue;
      if (tryKickBomb(player, this.bombs, this.grid)) this.onSound?.("kick");
      const dist = (player.speed * deltaMs) / 1000;
      const solidBombs = this.bombs.filter(
        (b) => !b.flying && !(b.passableFor && b.passableFor.includes(player.id))
      );
      const nextPos = computePlayerMovement(player.x, player.y, player.direction, dist, this.grid, solidBombs);
      player.x = nextPos.x;
      player.y = nextPos.y;
    }

    updateMovingBombs(this.bombs, this.grid, deltaMs, this.players);
    updateBombsPassability(this.bombs, this.players);

    const detonation = detonateDueBombs(this.bombs, this.grid, this.players, deltaMs, (s) => this.onSound?.(s));
    this.bombs = detonation.remainingBombs;
    this.flames.push(...detonation.newFlames);
    this.powerUps.push(...detonation.newPowerUps);

    this.flames = this.flames.filter((f) => (f.timer -= deltaMs) > 0);
    for (const p of this.powerUps) { if (p.immuneMs) p.immuneMs -= deltaMs; }
    const hitCheck = checkEntitiesHit(this.flames, this.players, this.powerUps);
    this.powerUps = hitCheck.remainingPowerUps;
    for (const deadId of hitCheck.deadPlayerIds) {
      if (this.players[deadId]?.alive) {
        this.players[deadId].alive = false;
        this.onSound?.("death");
      }
    }

    this.powerUps = checkPowerUpPickups(this.players, this.powerUps, (type) => this.onSound?.(type));
    const overCheck = evaluateGameOver(this.players);
    if (overCheck.isOver) {
      this.status = "gameover";
      this.winnerId = overCheck.winnerId;
      this.onSound?.(this.winnerId ? "victory" : "gameover");
    }
  }

  public getSnapshot(): GameSnapshot {
    return {
      roomId: this.roomId,
      status: this.status,
      tick: this.tickCount,
      grid: this.grid,
      players: this.players,
      bombs: this.bombs,
      flames: this.flames,
      powerUps: this.powerUps,
      winnerId: this.winnerId,
      countdown: 0,
    };
  }
}
