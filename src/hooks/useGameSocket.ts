"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ClientMessage, GameSnapshot, ServerMessage } from "@/types/game";
import { soundManager } from "@/lib/game/audio";

export function useGameSocket() {
  const [snapshot, setSnapshot] = useState<GameSnapshot | null>(null);
  const [myPlayerId, setMyPlayerId] = useState<string | null>(null);
  const [mySlot, setMySlot] = useState<number | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const wsRef = useRef<WebSocket | null>(null);

  const sendMessage = useCallback((msg: ClientMessage) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(msg));
    }
  }, []);

  const connect = useCallback((serverUrl: string, roomId: string, playerName: string) => {
    if (wsRef.current) {
      wsRef.current.close();
    }

    setErrorMsg(null);
    const ws = new WebSocket(serverUrl);
    wsRef.current = ws;

    ws.onopen = () => {
      setIsConnected(true);
      sendMessage({ type: "join_room", roomId, playerName });
    };

    ws.onmessage = (event) => {
      try {
        const msg: ServerMessage = JSON.parse(event.data);
        if (msg.type === "joined") {
          setMyPlayerId(msg.playerId);
          setMySlot(msg.slot);
        } else if (msg.type === "room_state") {
          setSnapshot(msg.snapshot);
        } else if (msg.type === "sound") {
          soundManager.playSound(msg.sound);
        } else if (msg.type === "error") {
          setErrorMsg(msg.message);
        }
      } catch {
        // Ignorer paquet invalide
      }
    };

    ws.onerror = () => {
      setErrorMsg("Impossible de joindre le serveur WebSocket de jeu.");
    };

    ws.onclose = () => {
      setIsConnected(false);
    };
  }, [sendMessage]);

  const disconnect = useCallback(() => {
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
    setIsConnected(false);
    setSnapshot(null);
    setMyPlayerId(null);
  }, []);

  useEffect(() => {
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  return {
    snapshot,
    myPlayerId,
    mySlot,
    isConnected,
    errorMsg,
    connect,
    disconnect,
    sendMessage,
  };
}
