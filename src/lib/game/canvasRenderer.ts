import { FlameState, GameSnapshot } from "@/types/game";
import { GRID_COLS, GRID_ROWS, TILE_SIZE } from "./constants";
import { drawBomb, drawPlayer, drawPowerUp } from "./renderEntities";

function drawTile(ctx: CanvasRenderingContext2D, cell: number, x: number, y: number): void {
  const px = x * TILE_SIZE;
  const py = y * TILE_SIZE;

  const isEven = (x + y) % 2 === 0;
  ctx.fillStyle = isEven ? "#22c55e" : "#16a34a";
  ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);

  if (cell === 1) {
    ctx.fillStyle = "#475569";
    ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);
    ctx.fillStyle = "#64748b";
    ctx.fillRect(px + 4, py + 4, TILE_SIZE - 8, TILE_SIZE - 8);
    ctx.strokeStyle = "#334155";
    ctx.strokeRect(px, py, TILE_SIZE, TILE_SIZE);
  } else if (cell === 2) {
    ctx.fillStyle = "#b45309";
    ctx.fillRect(px + 2, py + 2, TILE_SIZE - 4, TILE_SIZE - 4);
    ctx.fillStyle = "#d97706";
    ctx.fillRect(px + 4, py + 4, TILE_SIZE - 8, (TILE_SIZE - 8) / 2);
    ctx.strokeStyle = "#78350f";
    ctx.lineWidth = 1;
    ctx.strokeRect(px + 2, py + 2, TILE_SIZE - 4, TILE_SIZE - 4);
  }
}

function drawFlames(ctx: CanvasRenderingContext2D, flames: FlameState[], now: number): void {
  for (const f of flames) {
    const px = f.cellX * TILE_SIZE;
    const py = f.cellY * TILE_SIZE;
    const flicker = Math.sin(now * 0.03 + f.cellX * 10) * 3;

    const grad = ctx.createRadialGradient(
      px + TILE_SIZE / 2,
      py + TILE_SIZE / 2,
      4,
      px + TILE_SIZE / 2,
      py + TILE_SIZE / 2,
      TILE_SIZE / 2 + flicker
    );
    grad.addColorStop(0, "#ffffff");
    grad.addColorStop(0.3, "#facc15");
    grad.addColorStop(0.7, "#ea580c");
    grad.addColorStop(1, "rgba(220, 38, 38, 0)");

    ctx.fillStyle = grad;
    ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);
  }
}

export function renderGame(
  canvas: HTMLCanvasElement,
  snapshot: GameSnapshot,
  currentPlayerId: string | null
): void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const now = performance.now();
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 1. Grille de fond et blocs
  for (let y = 0; y < GRID_ROWS; y++) {
    for (let x = 0; x < GRID_COLS; x++) {
      const cell = snapshot.grid[y]?.[x] ?? 0;
      drawTile(ctx, cell, x, y);
    }
  }

  // 2. Bombes
  for (const bomb of snapshot.bombs) {
    drawBomb(ctx, bomb, now);
  }

  // 3. Flammes d'explosions
  drawFlames(ctx, snapshot.flames, now);

  // 4. Power-ups (au-dessus des flammes pour une visibilité immédiate)
  for (const item of snapshot.powerUps) {
    drawPowerUp(ctx, item, now);
  }

  // 5. Joueurs
  for (const player of Object.values(snapshot.players)) {
    drawPlayer(ctx, player, player.id === currentPlayerId);
  }
}
