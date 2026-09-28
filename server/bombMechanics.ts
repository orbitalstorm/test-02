import { BombState, Direction, PlayerState } from "../src/types/game";
import { GRID_COLS, GRID_ROWS, PUNCH_JUMP_DURATION_MS } from "../src/lib/game/constants";

function getDirOffset(dir: Direction): { dx: number; dy: number } {
  if (dir === "left") return { dx: -1, dy: 0 };
  if (dir === "right") return { dx: 1, dy: 0 };
  if (dir === "up") return { dx: 0, dy: -1 };
  if (dir === "down") return { dx: 0, dy: 1 };
  return { dx: 0, dy: 0 };
}

export function tryKickBomb(
  player: PlayerState,
  bombs: BombState[],
  grid: number[][]
): boolean {
  if (player.kickCount <= 0 || player.direction === "idle") return false;
  const { dx, dy } = getDirOffset(player.direction);
  const frontX = Math.floor(player.x + dx * 0.55);
  const frontY = Math.floor(player.y + dy * 0.55);

  const targetBomb = bombs.find(
    (b) => !b.flying && !b.slideDir && b.cellX === frontX && b.cellY === frontY
  );
  if (!targetBomb) return false;

  const nextX = frontX + dx;
  const nextY = frontY + dy;
  if (nextX < 0 || nextX >= GRID_COLS || nextY < 0 || nextY >= GRID_ROWS) return false;
  if (grid[nextY][nextX] !== 0 || bombs.some((b) => b.cellX === nextX && b.cellY === nextY)) {
    return false;
  }

  targetBomb.slideDir = player.direction;
  return true;
}

export function tryPunchBomb(
  player: PlayerState,
  bombs: BombState[],
  grid: number[][]
): boolean {
  if (player.punchCount <= 0) return false;
  const { dx, dy } = getDirOffset(player.direction === "idle" ? "up" : player.direction);
  const frontX = Math.floor(player.x + dx * 0.8);
  const frontY = Math.floor(player.y + dy * 0.8);

  const targetBomb = bombs.find(
    (b) => !b.flying && ((b.cellX === frontX && b.cellY === frontY) || (b.cellX === Math.floor(player.x) && b.cellY === Math.floor(player.y)))
  );
  if (!targetBomb) return false;

  // Calcul du saut par-dessus l'obstacle
  const jumpDistance = 2 + Math.min(3, player.punchCount);
  let targetX = Math.max(1, Math.min(GRID_COLS - 2, targetBomb.cellX + dx * jumpDistance));
  let targetY = Math.max(1, Math.min(GRID_ROWS - 2, targetBomb.cellY + dy * jumpDistance));

  // Si la case d'atterrissage est pleine, chercher la case libre la plus proche
  while ((grid[targetY][targetX] !== 0 || bombs.some((b) => b.id !== targetBomb.id && b.cellX === targetX && b.cellY === targetY)) && (targetX !== targetBomb.cellX || targetY !== targetBomb.cellY)) {
    targetX -= dx;
    targetY -= dy;
  }

  targetBomb.slideDir = undefined;
  targetBomb.flying = {
    startX: targetBomb.cellX,
    startY: targetBomb.cellY,
    targetX,
    targetY,
    progress: 0,
    duration: PUNCH_JUMP_DURATION_MS,
  };
  return true;
}

export function updateMovingBombs(
  bombs: BombState[],
  grid: number[][],
  deltaMs: number,
  players: Record<string, PlayerState>
): void {
  for (const b of bombs) {
    if (b.flying) {
      b.flying.progress += deltaMs / b.flying.duration;
      if (b.flying.progress >= 1.0) {
        b.cellX = b.flying.targetX;
        b.cellY = b.flying.targetY;
        b.flying = undefined;
        // Permettre aux joueurs sur la case d'atterrissage d'en sortir
        b.passableFor = Object.values(players)
          .filter((p) => p.alive && Math.floor(p.x) === b.cellX && Math.floor(p.y) === b.cellY)
          .map((p) => p.id);
      }
    } else if (b.slideDir) {
      const { dx, dy } = getDirOffset(b.slideDir);
      const nextX = b.cellX + dx;
      const nextY = b.cellY + dy;

      if (
        nextX < 0 ||
        nextX >= GRID_COLS ||
        nextY < 0 ||
        nextY >= GRID_ROWS ||
        grid[nextY][nextX] !== 0 ||
        bombs.some((other) => other.id !== b.id && other.cellX === nextX && other.cellY === nextY)
      ) {
        b.slideDir = undefined;
      } else {
        b.cellX = nextX;
        b.cellY = nextY;
      }
    }
  }
}
