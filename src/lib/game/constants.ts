export const GRID_COLS = 15;
export const GRID_ROWS = 13;
export const TILE_SIZE = 48;

export const SERVER_TICK_RATE = 30; // 30 fps
export const SERVER_TICK_MS = 1000 / SERVER_TICK_RATE;

export const BOMB_FUSE_MS = 2500;
export const FLAME_DURATION_MS = 600;

export const BASE_PLAYER_SPEED = 3.6;
export const SPEED_BONUS = 0.5;
export const SPEED_PENALTY = 0.7;
export const MIN_SPEED = 1.8;
export const MAX_SPEED = 6.0;

export const MIN_FLAME_RADIUS = 1;
export const MAX_FLAME_RADIUS = 8;
export const MAX_BOMBS = 8;

export const BOMB_SLIDE_SPEED = 8.0; // cases par seconde pour la glisse
export const PUNCH_JUMP_CELLS = 3; // distance de saut de bombe
export const PUNCH_JUMP_DURATION_MS = 450; // durée de vol

export const MAX_PLAYERS = 4;

export interface SlotConfig {
  name: string;
  color: string;
  accentColor: string;
  glowColor: string;
  spawnCol: number;
  spawnRow: number;
}

export const PLAYER_SLOTS: SlotConfig[] = [
  {
    name: "Bleu",
    color: "#2563eb",
    accentColor: "#60a5fa",
    glowColor: "rgba(37, 99, 235, 0.4)",
    spawnCol: 1,
    spawnRow: 1,
  },
  {
    name: "Rouge",
    color: "#dc2626",
    accentColor: "#f87171",
    glowColor: "rgba(220, 38, 38, 0.4)",
    spawnCol: 13,
    spawnRow: 11,
  },
  {
    name: "Vert",
    color: "#16a34a",
    accentColor: "#4ade80",
    glowColor: "rgba(22, 163, 74, 0.4)",
    spawnCol: 13,
    spawnRow: 1,
  },
  {
    name: "Jaune",
    color: "#ca8a04",
    accentColor: "#facc15",
    glowColor: "rgba(220, 180, 4, 0.4)",
    spawnCol: 1,
    spawnRow: 11,
  },
];

export const CORNER_SAFE_ZONES = [
  [1, 1], [1, 2], [2, 1],
  [13, 11], [13, 10], [12, 11],
  [13, 1], [13, 2], [12, 1],
  [1, 11], [1, 10], [2, 11],
];
