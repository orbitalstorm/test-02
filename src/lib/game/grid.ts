import { GRID_COLS, GRID_ROWS, CORNER_SAFE_ZONES } from "./constants";

export function isCornerSafe(x: number, y: number): boolean {
  return CORNER_SAFE_ZONES.some(([sx, sy]) => sx === x && sy === y);
}

export function generateInitialGrid(brickDensity = 0.65): number[][] {
  const grid: number[][] = [];

  for (let y = 0; y < GRID_ROWS; y++) {
    const row: number[] = [];
    for (let x = 0; x < GRID_COLS; x++) {
      // Murs extérieurs
      if (x === 0 || x === GRID_COLS - 1 || y === 0 || y === GRID_ROWS - 1) {
        row.push(1);
      }
      // Piliers intérieurs indestructibles
      else if (x % 2 === 0 && y % 2 === 0) {
        row.push(1);
      }
      // Zones sécurisées de coin
      else if (isCornerSafe(x, y)) {
        row.push(0);
      }
      // Briques destructibles aléatoires
      else {
        row.push(Math.random() < brickDensity ? 2 : 0);
      }
    }
    grid.push(row);
  }

  return grid;
}

export function isCellPassable(
  grid: number[][],
  x: number,
  y: number
): boolean {
  if (x < 0 || x >= GRID_COLS || y < 0 || y >= GRID_ROWS) return false;
  return grid[y][x] === 0;
}

export function getCellCenter(cellX: number, cellY: number): { x: number; y: number } {
  return {
    x: cellX + 0.5,
    y: cellY + 0.5,
  };
}
