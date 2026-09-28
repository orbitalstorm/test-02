"use client";

import { GameSnapshot } from "@/types/game";
import { Button } from "@/components/ui/Button";
import { Trophy, RotateCcw, Skull } from "lucide-react";

interface GameOverlayProps {
  snapshot: GameSnapshot;
  currentPlayerId: string | null;
  onRestart: () => void;
  onLeave: () => void;
}

export function GameOverlay({
  snapshot,
  currentPlayerId,
  onRestart,
  onLeave,
}: GameOverlayProps) {
  if (snapshot.status !== "gameover") return null;

  const winner = snapshot.winnerId ? snapshot.players[snapshot.winnerId] : null;
  const isMeWinner = winner?.id === currentPlayerId;

  return (
    <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-20 animate-fade-in">
      <div className="w-full max-w-sm bg-stone-900 border-2 border-stone-700 rounded-3xl p-6 text-center shadow-2xl flex flex-col items-center">
        {winner ? (
          <>
            <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-500 text-amber-400 flex items-center justify-center mb-4 animate-bounce">
              <Trophy className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black uppercase text-stone-100 font-mono tracking-wider mb-1">
              {isMeWinner ? "Victoire Éclatante !" : "Fin de Partie"}
            </h3>
            <p className="text-sm text-stone-300 font-mono mb-6">
              Vainqueur : <span className="text-amber-400 font-bold">{winner.name}</span>
            </p>
          </>
        ) : (
          <>
            <div className="w-16 h-16 rounded-full bg-stone-800 text-stone-400 flex items-center justify-center mb-4">
              <Skull className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black uppercase text-stone-100 font-mono tracking-wider mb-1">
              Match Nul !
            </h3>
            <p className="text-sm text-stone-400 font-mono mb-6">
              Tous les joueurs ont succombé aux flammes.
            </p>
          </>
        )}

        <div className="flex flex-col gap-3 w-full">
          <Button variant="primary" size="lg" onClick={onRestart} className="w-full">
            <RotateCcw className="w-5 h-5" />
            Rejouer un Round
          </Button>

          <Button variant="outline" size="md" onClick={onLeave} className="w-full">
            Retour au Lobby
          </Button>
        </div>
      </div>
    </div>
  );
}
