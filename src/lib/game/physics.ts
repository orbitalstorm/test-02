import { GRID_COLS, GRID_ROWS } from "./constants";
import { Direction } from "@/types/game";

const PLAYER_RADIUS = 0.35;
const CORNER_SNAP_THRESHOLD = 0.25;

export interface MoveResult {
  x: number;
  y: number;
}

function collidesWithCell(
  px: number,
  py: number,
  cx: number,
  cy: number,
  grid: number[][],
  solidBombs: { cellX: number; cellY: number }[]
): boolean {
  if (cx < 0 || cx >= GRID_COLS || cy < 0 || cy >= GRID_ROWS) return true;
  if (grid[cy][cx] !== 0) return true;
  return solidBombs.some((b) => b.cellX === cx && b.cellY === cy);
}

function canOccupy(
  x: number,
  y: number,
  grid: number[][],
  solidBombs: { cellX: number; cellY: number }[]
): boolean {
  const minX = Math.floor(x - PLAYER_RADIUS);
  const maxX = Math.floor(x + PLAYER_RADIUS);
  const minY = Math.floor(y - PLAYER_RADIUS);
  const maxY = Math.floor(y + PLAYER_RADIUS);

  for (let cy = minY; cy <= maxY; cy++) {
    for (let cx = minX; cx <= maxX; cx++) {
      if (collidesWithCell(x, y, cx, cy, grid, solidBombs)) {
        return false;
      }
    }
  }
  return true;
}

export function computePlayerMovement(
  currentX: number,
  currentY: number,
  dir: Direction,
  distance: number,
  grid: number[][],
  solidBombs: { cellX: number; cellY: number }[]
): MoveResult {
  if (dir === "idle" || distance <= 0) {
    return { x: currentX, y: currentY };
  }

  let dx = 0;
  let dy = 0;
  if (dir === "up") dy = -distance;
  if (dir === "down") dy = distance;
  if (dir === "left") dx = -distance;
  if (dir === "right") dx = distance;

  // Assistance dans les virages (corner sliding)
  let testX = currentX;
  let testY = currentY;

  if (dir === "left" || dir === "right") {
    const centerRow = Math.floor(currentY) + 0.5;
    const diffY = centerRow - currentY;
    if (Math.abs(diffY) <= CORNER_SNAP_THRESHOLD) {
      testY = currentY + Math.sign(diffY) * Math.min(Math.abs(diffY), distance * 0.8);
    }
  } else if (dir === "up" || dir === "down") {
    const centerCol = Math.floor(currentX) + 0.5;
    const diffX = centerCol - currentX;
    if (Math.abs(diffX) <= CORNER_SNAP_THRESHOLD) {
      testX = currentX + Math.sign(diffX) * Math.min(Math.abs(diffX), distance * 0.8);
    }
  }

  // Tenter le déplacement plein
  if (canOccupy(testX + dx, testY + dy, grid, solidBombs)) {
    return { x: testX + dx, y: testY + dy };
  }

  // Glissement partiel sur l'axe libre
  if (dx !== 0 && canOccupy(currentX + dx, currentY, grid, solidBombs)) {
    return { x: currentX + dx, y: currentY };
  }
  if (dy !== 0 && canOccupy(currentX, currentY + dy, grid, solidBombs)) {
    return { x: currentX, y: currentY + dy };
  }

  return { x: currentX, y: currentY };
}
