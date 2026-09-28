"use client";

import { GameSnapshot } from "@/types/game";
import { PlayerSlotCard } from "./PlayerSlotCard";
import { Button } from "@/components/ui/Button";
import { Copy, Check, Play, LogOut, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface LobbyRoomViewProps {
  snapshot: GameSnapshot;
  currentPlayerId: string | null;
  onSetReady: (ready: boolean) => void;
  onStartGame: () => void;
  onLeave: () => void;
}

export function LobbyRoomView({
  snapshot,
  currentPlayerId,
  onSetReady,
  onStartGame,
  onLeave,
}: LobbyRoomViewProps) {
  const [copied, setCopied] = useState(false);
  const playersList = Object.values(snapshot.players);
  const me = currentPlayerId ? snapshot.players[currentPlayerId] : null;
  const isMeReady = me?.ready ?? false;
  const canStart = playersList.length >= 1;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(snapshot.roomId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl bg-stone-900/90 border-2 border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-stone-800">
        <div>
          <span className="text-xs uppercase tracking-widest text-amber-500 font-bold">Salon de Jeu</span>
          <div className="flex items-center gap-2 mt-1">
            <h2 className="text-2xl sm:text-3xl font-black text-stone-100 font-mono tracking-wider">
              {snapshot.roomId}
            </h2>
            <button
              onClick={handleCopyCode}
              className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
              title="Copier le code de salon"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="danger" size="sm" onClick={onLeave}>
            <LogOut className="w-4 h-4" /> Quitter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
        {[0, 1, 2, 3].map((slotIdx) => {
          const player = playersList.find((p) => p.slot === slotIdx);
          return (
            <PlayerSlotCard
              key={slotIdx}
              slotIndex={slotIdx}
              player={player}
              isCurrentPlayer={player?.id === currentPlayerId}
            />
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between pt-4 border-t border-stone-800">
        <Button
          variant={isMeReady ? "outline" : "secondary"}
          onClick={() => onSetReady(!isMeReady)}
          className="w-full sm:w-auto"
        >
          <CheckCircle2 className="w-4 h-4" />
          {isMeReady ? "Annuler Prêt" : "Marquer Prêt"}
        </Button>

        <Button
          variant="primary"
          size="lg"
          onClick={onStartGame}
          disabled={!canStart}
          className="w-full sm:w-auto"
        >
          <Play className="w-5 h-5 fill-current" />
          Lancer la Partie
        </Button>
      </div>
    </div>
  );
}
