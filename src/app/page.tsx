import { GameClientContainer } from "@/components/features/game/GameClientContainer";
import { Bomb } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      <header className="w-full border-b border-stone-800/80 bg-stone-900/50 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-500 text-stone-950 font-black shadow-lg shadow-amber-500/20">
            <Bomb className="w-6 h-6 animate-bounce" />
          </div>
          <div>
            <h1 className="text-lg font-black tracking-wider uppercase font-mono bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Bomberman 4P Network
            </h1>
            <p className="text-[11px] text-stone-400 font-mono">Multijoueur en temps réel</p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-stone-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            Serveur 30 TPS
          </span>
          <span className="px-2.5 py-1 rounded-md bg-stone-800 text-stone-300 border border-stone-700">
            4 Joueurs Max
          </span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Grille décorative d'arrière-plan */}
        <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <GameClientContainer />
      </main>

      <footer className="py-3 px-6 border-t border-stone-900 text-center text-xs text-stone-500 font-mono">
        Bomberman Clone • Propulsé par Next.js, WebSockets & HTML5 Canvas
      </footer>
    </div>
  );
}
