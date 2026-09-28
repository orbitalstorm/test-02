import { BombState, FlameState, PlayerState, PowerUpItem, PowerUpType } from "../src/types/game";
import { GRID_COLS, GRID_ROWS, FLAME_DURATION_MS } from "../src/lib/game/constants";

export interface ExplosionResult {
  newFlames: FlameState[];
  destroyedBricks: { x: number; y: number }[];
  spawnedPowerUps: PowerUpItem[];
  triggeredBombs: string[];
}

const POWER_UP_PROBABILITY = 0.55;
const POWER_UP_CHOICES: PowerUpType[] = [
  "flame", "flame", "bomb", "bomb", "speed", "speed", "kick", "punch", "slow", "skull",
];

export function processExplosion(
  bomb: BombState,
  grid: number[][],
  existingBombs: BombState[]
): ExplosionResult {
  const newFlames: FlameState[] = [
    { cellX: bomb.cellX, cellY: bomb.cellY, timer: FLAME_DURATION_MS },
  ];
  const destroyedBricks: { x: number; y: number }[] = [];
  const spawnedPowerUps: PowerUpItem[] = [];
  const triggeredBombs: string[] = [];
  const directions = [{ dx: 0, dy: -1 }, { dx: 0, dy: 1 }, { dx: -1, dy: 0 }, { dx: 1, dy: 0 }];

  for (const { dx, dy } of directions) {
    for (let step = 1; step <= bomb.flameRadius; step++) {
      const cx = bomb.cellX + dx * step;
      const cy = bomb.cellY + dy * step;
      if (cx < 0 || cx >= GRID_COLS || cy < 0 || cy >= GRID_ROWS) break;
      const cell = grid[cy][cx];
      if (cell === 1) break;

      newFlames.push({ cellX: cx, cellY: cy, timer: FLAME_DURATION_MS });
      const hitBomb = existingBombs.find((b) => b.id !== bomb.id && b.cellX === cx && b.cellY === cy);
      if (hitBomb) triggeredBombs.push(hitBomb.id);

      if (cell === 2) {
        destroyedBricks.push({ x: cx, y: cy });
        if (Math.random() < POWER_UP_PROBABILITY) {
          const type = POWER_UP_CHOICES[Math.floor(Math.random() * POWER_UP_CHOICES.length)];
          spawnedPowerUps.push({
            id: `p_${Date.now()}_${cx}_${cy}`,
            cellX: cx,
            cellY: cy,
            type,
            immuneMs: 800,
          });
        }
        break;
      }
    }
  }
  return { newFlames, destroyedBricks, spawnedPowerUps, triggeredBombs };
}

export function detonateDueBombs(
  bombs: BombState[],
  grid: number[][],
  players: Record<string, PlayerState>,
  deltaMs: number,
  onSound?: (s: "explosion") => void
): { remainingBombs: BombState[]; newFlames: FlameState[]; newPowerUps: PowerUpItem[] } {
  const newFlames: FlameState[] = [];
  const newPowerUps: PowerUpItem[] = [];
  let currentBombs = [...bombs];
  const queue: BombState[] = currentBombs.filter((b) => !b.flying && (b.timer -= deltaMs) <= 0);

  while (queue.length > 0) {
    const bomb = queue.shift()!;
    currentBombs = currentBombs.filter((b) => b.id !== bomb.id);
    const owner = players[bomb.plantedBy];
    if (owner && owner.bombsActive > 0) owner.bombsActive--;

    const exp = processExplosion(bomb, grid, currentBombs);
    for (const b of exp.destroyedBricks) grid[b.y][b.x] = 0;
    newFlames.push(...exp.newFlames);
    newPowerUps.push(...exp.spawnedPowerUps);

    for (const trigId of exp.triggeredBombs) {
      const tb = currentBombs.find((b) => b.id === trigId);
      if (tb && !queue.some((b) => b.id === trigId)) queue.push(tb);
    }
    onSound?.("explosion");
  }

  return { remainingBombs: currentBombs, newFlames, newPowerUps };
}

export function checkEntitiesHit(
  flames: FlameState[],
  players: Record<string, PlayerState>,
  powerUps: PowerUpItem[]
): { deadPlayerIds: string[]; remainingPowerUps: PowerUpItem[] } {
  const deadPlayerIds: string[] = [];
  for (const player of Object.values(players)) {
    if (!player.alive) continue;
    const hit = flames.some((f) => f.cellX === Math.floor(player.x) && f.cellY === Math.floor(player.y));
    if (hit) deadPlayerIds.push(player.id);
  }
  const remainingPowerUps = powerUps.filter((p) => {
    if (p.immuneMs && p.immuneMs > 0) return true;
    return !flames.some((f) => f.cellX === p.cellX && f.cellY === p.cellY);
  });
  return { deadPlayerIds, remainingPowerUps };
}
