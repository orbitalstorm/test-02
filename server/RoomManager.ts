import { WebSocket } from "ws";
import { GameInstance } from "./GameInstance";
import { PLAYER_SLOTS, MAX_PLAYERS } from "../src/lib/game/constants";
import { ServerMessage } from "../src/types/game";

export interface ConnectedClient {
  socket: WebSocket;
  playerId: string;
  roomId: string;
  name: string;
  slot: number;
}

export class RoomManager {
  private games: Map<string, GameInstance> = new Map();
  private clients: Map<WebSocket, ConnectedClient> = new Map();

  public getOrCreateGame(roomId: string): GameInstance {
    let game = this.games.get(roomId);
    if (!game) {
      game = new GameInstance(roomId);
      this.games.set(roomId, game);
    }
    return game;
  }

  public getGame(roomId: string): GameInstance | undefined {
    return this.games.get(roomId);
  }

  public getClient(ws: WebSocket): ConnectedClient | undefined {
    return this.clients.get(ws);
  }

  public joinRoom(
    ws: WebSocket,
    roomId: string,
    playerName: string,
    sendMsg: (ws: WebSocket, msg: ServerMessage) => void
  ): boolean {
    const game = this.getOrCreateGame(roomId);
    const existingPlayers = Object.values(game.players);

    if (existingPlayers.length >= MAX_PLAYERS) {
      sendMsg(ws, { type: "error", message: "Le salon est plein (4 joueurs max)." });
      return false;
    }

    const usedSlots = new Set(existingPlayers.map((p) => p.slot));
    let availableSlot = 0;
    while (usedSlots.has(availableSlot) && availableSlot < MAX_PLAYERS) {
      availableSlot++;
    }

    const playerId = `p_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const slotConf = PLAYER_SLOTS[availableSlot];

    game.players[playerId] = {
      id: playerId,
      name: playerName.trim() || `Joueur ${availableSlot + 1}`,
      slot: availableSlot,
      x: slotConf.spawnCol + 0.5,
      y: slotConf.spawnRow + 0.5,
      alive: true,
      bombsMax: 1,
      bombsActive: 0,
      flameRadius: 2,
      speed: 3.6,
      kickCount: 0,
      punchCount: 0,
      ready: false,
      direction: "idle",
      isMoving: false,
    };

    const client: ConnectedClient = {
      socket: ws,
      playerId,
      roomId,
      name: game.players[playerId].name,
      slot: availableSlot,
    };
    this.clients.set(ws, client);

    sendMsg(ws, { type: "joined", playerId, slot: availableSlot, roomId });
    return true;
  }

  public removeClient(ws: WebSocket): { roomId: string; playerId: string } | null {
    const client = this.clients.get(ws);
    if (!client) return null;

    this.clients.delete(ws);
    const game = this.games.get(client.roomId);
    if (game) {
      delete game.players[client.playerId];
      // Si la salle est vide, la nettoyer
      if (Object.keys(game.players).length === 0) {
        this.games.delete(client.roomId);
      }
    }
    return { roomId: client.roomId, playerId: client.playerId };
  }

  public getClientsInRoom(roomId: string): ConnectedClient[] {
    return Array.from(this.clients.values()).filter((c) => c.roomId === roomId);
  }

  public getAllGames(): Map<string, GameInstance> {
    return this.games;
  }
}
