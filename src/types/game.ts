export type CellType = 0 | 1 | 2; // 0: vide, 1: mur indestructible, 2: brique destructible

export type PowerUpType =
  | "flame"
  | "bomb"
  | "speed"
  | "kick"
  | "punch"
  | "slow"
  | "skull";

export type Direction = "up" | "down" | "left" | "right" | "idle";

export interface PlayerState {
  id: string;
  name: string;
  slot: number; // 0, 1, 2, 3
  x: number;
  y: number;
  alive: boolean;
  bombsMax: number;
  bombsActive: number;
  flameRadius: number;
  speed: number;
  kickCount: number; // > 0 permet de pousser/faire glisser les bombes
  punchCount: number; // > 0 permet de catapulter par-dessus les murs
  ready: boolean;
  direction: Direction;
  isMoving: boolean;
}

export interface BombFlyingState {
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
  progress: number; // 0.0 à 1.0
  duration: number; // ms
}

export interface BombState {
  id: string;
  cellX: number;
  cellY: number;
  plantedBy: string;
  timer: number; // ms restantes
  flameRadius: number;
  passableFor?: string[];
  slideDir?: "up" | "down" | "left" | "right";
  flying?: BombFlyingState;
}

export interface FlameState {
  cellX: number;
  cellY: number;
  timer: number;
}

export interface PowerUpItem {
  id: string;
  cellX: number;
  cellY: number;
  type: PowerUpType;
  immuneMs?: number; // Protection contre la flamme qui vient de détruire la brique
}

export type GameStatus = "waiting" | "starting" | "playing" | "gameover";

export interface GameSnapshot {
  roomId: string;
  status: GameStatus;
  tick: number;
  grid: number[][];
  players: Record<string, PlayerState>;
  bombs: BombState[];
  flames: FlameState[];
  powerUps: PowerUpItem[];
  winnerId: string | null;
  countdown: number;
}

export interface SoundEvent {
  type:
    | "plant"
    | "explosion"
    | "powerup"
    | "malus"
    | "kick"
    | "punch"
    | "death"
    | "gameover"
    | "victory";
  timestamp: number;
}

export type ClientMessage =
  | { type: "join_room"; roomId: string; playerName: string }
  | { type: "leave_room" }
  | { type: "set_ready"; ready: boolean }
  | { type: "start_game" }
  | { type: "move"; direction: Direction }
  | { type: "stop_move" }
  | { type: "plant_bomb" }
  | { type: "punch_bomb" }
  | { type: "restart_round" };

export type ServerMessage =
  | { type: "joined"; playerId: string; slot: number; roomId: string }
  | { type: "room_state"; snapshot: GameSnapshot }
  | { type: "sound"; sound: SoundEvent["type"] }
  | { type: "error"; message: string };
