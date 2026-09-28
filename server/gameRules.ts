import { PlayerState, PowerUpItem, BombState } from "../src/types/game";
import {
  SPEED_BONUS,
  SPEED_PENALTY,
  MIN_SPEED,
  MAX_SPEED,
  MIN_FLAME_RADIUS,
  MAX_FLAME_RADIUS,
  MAX_BOMBS,
} from "../src/lib/game/constants";

export function isPlayerOverlappingCell(
  player: PlayerState,
  cellX: number,
  cellY: number,
  radius = 0.3
): boolean {
  if (!player.alive) return false;
  return (
    player.x + radius > cellX &&
    player.x - radius < cellX + 1 &&
    player.y + radius > cellY &&
    player.y - radius < cellY + 1
  );
}

export function updateBombsPassability(
  bombs: BombState[],
  players: Record<string, PlayerState>
): void {
  for (const bomb of bombs) {
    if (!bomb.passableFor || bomb.passableFor.length === 0) continue;
    bomb.passableFor = bomb.passableFor.filter((pid) => {
      const p = players[pid];
      if (!p || !p.alive) return false;
      return isPlayerOverlappingCell(p, bomb.cellX, bomb.cellY);
    });
  }
}

export function checkPowerUpPickups(
  players: Record<string, PlayerState>,
  powerUps: PowerUpItem[],
  onPickup?: (type: "powerup" | "malus") => void
): PowerUpItem[] {
  const remaining = [...powerUps];

  for (const player of Object.values(players)) {
    if (!player.alive) continue;
    const px = Math.floor(player.x);
    const py = Math.floor(player.y);
    const pIdx = remaining.findIndex((p) => p.cellX === px && p.cellY === py);
    if (pIdx !== -1) {
      const item = remaining[pIdx];
      remaining.splice(pIdx, 1);
      const isMalus = item.type === "slow" || item.type === "skull";

      if (item.type === "flame") {
        player.flameRadius = Math.min(MAX_FLAME_RADIUS, player.flameRadius + 1);
      } else if (item.type === "bomb") {
        player.bombsMax = Math.min(MAX_BOMBS, player.bombsMax + 1);
      } else if (item.type === "speed") {
        player.speed = Math.min(MAX_SPEED, player.speed + SPEED_BONUS);
      } else if (item.type === "kick") {
        player.kickCount = (player.kickCount || 0) + 1;
      } else if (item.type === "punch") {
        player.punchCount = (player.punchCount || 0) + 1;
      } else if (item.type === "slow") {
        player.speed = Math.max(MIN_SPEED, player.speed - SPEED_PENALTY);
      } else if (item.type === "skull") {
        player.flameRadius = Math.max(MIN_FLAME_RADIUS, player.flameRadius - 1);
      }

      onPickup?.(isMalus ? "malus" : "powerup");
    }
  }

  return remaining;
}

export function evaluateGameOver(
  players: Record<string, PlayerState>
): { isOver: boolean; winnerId: string | null } {
  const alivePlayers = Object.values(players).filter((p) => p.alive);
  const totalPlayers = Object.keys(players).length;

  if (totalPlayers >= 2 && alivePlayers.length <= 1) {
    return {
      isOver: true,
      winnerId: alivePlayers.length === 1 ? alivePlayers[0].id : null,
    };
  }

  return { isOver: false, winnerId: null };
}
