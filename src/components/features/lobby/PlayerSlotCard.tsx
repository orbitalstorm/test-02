import { PlayerState } from "@/types/game";
import { CheckCircle2, Clock, User } from "lucide-react";

interface PlayerSlotCardProps {
  slotIndex: number;
  player?: PlayerState;
  isCurrentPlayer: boolean;
}

const SLOT_BG_CLASSES = ["bg-blue-600", "bg-red-600", "bg-green-600", "bg-yellow-500"];

export function PlayerSlotCard({ slotIndex, player, isCurrentPlayer }: PlayerSlotCardProps) {
  const bgClass = SLOT_BG_CLASSES[slotIndex] || "bg-stone-600";

  if (!player) {
    return (
      <div className="flex flex-col items-center justify-center p-4 rounded-2xl border-2 border-dashed border-stone-800 bg-stone-900/40 text-stone-600 min-h-[140px]">
        <div className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center mb-2">
          <User className="w-5 h-5 opacity-40" />
        </div>
        <span className="text-xs font-mono uppercase font-bold tracking-wider">Slot {slotIndex + 1}</span>
        <span className="text-[11px] text-stone-600">En attente...</span>
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col items-center p-4 rounded-2xl border-2 transition-all min-h-[140px] bg-stone-900/90 ${
        isCurrentPlayer ? "border-amber-500 shadow-lg shadow-amber-500/10" : "border-stone-800"
      }`}
    >
      {isCurrentPlayer && (
        <span className="absolute -top-3 px-2 py-0.5 bg-amber-500 text-stone-950 font-black text-[10px] rounded-full uppercase tracking-wider">
          Vous
        </span>
      )}

      <div
        className={`w-12 h-12 rounded-full border-2 border-white shadow-md flex items-center justify-center mb-2 relative ${bgClass}`}
      >
        <span className="text-white font-black text-xs font-mono">{slotIndex + 1}</span>
      </div>

      <span className="text-sm font-bold text-stone-100 truncate max-w-[120px] mb-2 font-mono">
        {player.name}
      </span>

      <div className="mt-auto">
        {player.ready ? (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[11px] font-bold">
            <CheckCircle2 className="w-3.5 h-3.5" /> Prêt
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-800 border border-stone-700 text-stone-400 text-[11px] font-bold">
            <Clock className="w-3.5 h-3.5" /> En attente
          </span>
        )}
      </div>
    </div>
  );
}
