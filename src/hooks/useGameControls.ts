"use client";

import { useEffect, useRef } from "react";
import { ClientMessage, Direction } from "@/types/game";

interface UseGameControlsProps {
  enabled: boolean;
  sendMessage: (msg: ClientMessage) => void;
}

const PUNCH_KEYS = ["KeyX", "KeyE", "ShiftLeft", "ShiftRight", "KeyK"];

export function useGameControls({ enabled, sendMessage }: UseGameControlsProps) {
  const activeKeys = useRef<Set<string>>(new Set());
  const currentDir = useRef<Direction>("idle");

  const resolveDirection = (): Direction => {
    const keys = activeKeys.current;
    if (keys.has("ArrowUp") || keys.has("KeyW") || keys.has("KeyZ")) return "up";
    if (keys.has("ArrowDown") || keys.has("KeyS")) return "down";
    if (keys.has("ArrowLeft") || keys.has("KeyA") || keys.has("KeyQ")) return "left";
    if (keys.has("ArrowRight") || keys.has("KeyD")) return "right";
    return "idle";
  };

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.code)) {
        e.preventDefault();
      }

      if (e.code === "Space" && !e.repeat) {
        sendMessage({ type: "plant_bomb" });
        return;
      }

      if (PUNCH_KEYS.includes(e.code) && !e.repeat) {
        sendMessage({ type: "punch_bomb" });
        return;
      }

      activeKeys.current.add(e.code);
      const newDir = resolveDirection();
      if (newDir !== currentDir.current) {
        currentDir.current = newDir;
        if (newDir === "idle") {
          sendMessage({ type: "stop_move" });
        } else {
          sendMessage({ type: "move", direction: newDir });
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      activeKeys.current.delete(e.code);
      const newDir = resolveDirection();
      if (newDir !== currentDir.current) {
        currentDir.current = newDir;
        if (newDir === "idle") {
          sendMessage({ type: "stop_move" });
        } else {
          sendMessage({ type: "move", direction: newDir });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const keys = activeKeys.current;
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      keys.clear();
      currentDir.current = "idle";
    };
  }, [enabled, sendMessage]);
}
