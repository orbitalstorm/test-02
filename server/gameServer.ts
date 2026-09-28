import { WebSocketServer, WebSocket } from "ws";
import { RoomManager } from "./RoomManager";
import { ClientMessageSchema } from "./messageSchema";
import { SERVER_TICK_MS } from "../src/lib/game/constants";
import { ServerMessage } from "../src/types/game";

const PORT = parseInt(process.env.WS_PORT || "3001", 10);
const wss = new WebSocketServer({ port: PORT });
const roomManager = new RoomManager();

function send(ws: WebSocket, msg: ServerMessage) {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(msg));
  }
}

function broadcastToRoom(roomId: string, msg: ServerMessage) {
  const clients = roomManager.getClientsInRoom(roomId);
  const data = JSON.stringify(msg);
  for (const client of clients) {
    if (client.socket.readyState === WebSocket.OPEN) {
      client.socket.send(data);
    }
  }
}

wss.on("connection", (ws) => {
  ws.on("message", (raw) => {
    let parsedJson: unknown;
    try {
      parsedJson = JSON.parse(raw.toString());
    } catch {
      return send(ws, { type: "error", message: "JSON invalide" });
    }

    const parseResult = ClientMessageSchema.safeParse(parsedJson);
    if (!parseResult.success) {
      return send(ws, { type: "error", message: "Message malformé" });
    }

    const msg = parseResult.data;
    const client = roomManager.getClient(ws);

    if (msg.type === "join_room") {
      const ok = roomManager.joinRoom(ws, msg.roomId.toUpperCase(), msg.playerName, send);
      if (ok) {
        const game = roomManager.getOrCreateGame(msg.roomId.toUpperCase());
        game.onSound = (type) => broadcastToRoom(game.roomId, { type: "sound", sound: type });
        broadcastToRoom(game.roomId, { type: "room_state", snapshot: game.getSnapshot() });
      }
      return;
    }

    if (!client) return;
    const game = roomManager.getGame(client.roomId);
    if (!game) return;

    if (msg.type === "set_ready") {
      const player = game.players[client.playerId];
      if (player) {
        player.ready = msg.ready;
        broadcastToRoom(game.roomId, { type: "room_state", snapshot: game.getSnapshot() });
      }
    } else if (msg.type === "start_game" || msg.type === "restart_round") {
      game.resetRound();
      broadcastToRoom(game.roomId, { type: "room_state", snapshot: game.getSnapshot() });
    } else if (msg.type === "move") {
      const player = game.players[client.playerId];
      if (player && player.alive) {
        player.direction = msg.direction;
        player.isMoving = true;
      }
    } else if (msg.type === "stop_move") {
      const player = game.players[client.playerId];
      if (player) {
        player.direction = "idle";
        player.isMoving = false;
      }
    } else if (msg.type === "plant_bomb") {
      game.plantBomb(client.playerId);
    } else if (msg.type === "punch_bomb") {
      game.punchBomb(client.playerId);
    }
  });

  ws.on("close", () => {
    const left = roomManager.removeClient(ws);
    if (left) {
      const game = roomManager.getGame(left.roomId);
      if (game) {
        broadcastToRoom(left.roomId, { type: "room_state", snapshot: game.getSnapshot() });
      }
    }
  });
});

setInterval(() => {
  for (const [roomId, game] of roomManager.getAllGames()) {
    game.update(SERVER_TICK_MS);
    broadcastToRoom(roomId, { type: "room_state", snapshot: game.getSnapshot() });
  }
}, SERVER_TICK_MS);

console.log(`[Bomberman Server] Serveur WebSocket démarré sur ws://localhost:${PORT}`);
