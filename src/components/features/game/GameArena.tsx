"use client";

import { useEffect, useRef } from "react";
import { GameSnapshot, ClientMessage } from "@/types/game";
import { GRID_COLS, GRID_ROWS, TILE_SIZE } from "@/lib/game/constants";
import { renderGame } from "@/lib/game/canvasRenderer";
import { useGameControls } from "@/hooks/useGameControls";
import { GameHeader } from "./GameHeader";
import { GameOverlay } from "./GameOverlay";

interface GameArenaProps {
  snapshot: GameSnapshot;
  currentPlayerId: string | null;
  sendMessage: (msg: ClientMessage) => void;
  onLeave: () => void;
}

export function GameArena({
  snapshot,
  currentPlayerId,
  sendMessage,
  onLeave,
}: GameArenaProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useGameControls({
    enabled: snapshot.status === "playing",
    sendMessage,
  });

  useEffect(() => {
    let animId: number;

    const loop = () => {
      if (canvasRef.current) {
        renderGame(canvasRef.current, snapshot, currentPlayerId);
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [snapshot, currentPlayerId]);

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-4xl">
      <GameHeader
        snapshot={snapshot}
        currentPlayerId={currentPlayerId}
        onLeave={onLeave}
      />

      <div className="relative border-4 border-stone-800 rounded-2xl overflow-hidden shadow-2xl bg-stone-950">
        <canvas
          ref={canvasRef}
          width={GRID_COLS * TILE_SIZE}
          height={GRID_ROWS * TILE_SIZE}
          className="block max-w-full h-auto cursor-crosshair"
        />

        <GameOverlay
          snapshot={snapshot}
          currentPlayerId={currentPlayerId}
          onRestart={() => sendMessage({ type: "restart_round" })}
          onLeave={onLeave}
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-stone-400 font-mono text-xs py-2 px-4 bg-stone-900/60 rounded-xl border border-stone-800/80">
        <span>🎮 <strong className="text-stone-200">ZQSD / Flèches</strong> : Marche / Pousser bombe (Kick 👟)</span>
        <span>💣 <strong className="text-stone-200">Espace</strong> : Poser une bombe</span>
        <span>🥊 <strong className="text-stone-200">X / E / Shift</strong> : Coup de poing par-dessus les murs</span>
      </div>
    </div>
  );
}
