"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Bomb, Play, Dices } from "lucide-react";

interface JoinRoomCardProps {
  onJoin: (roomId: string, playerName: string) => void;
  defaultRoomId?: string;
  error?: string | null;
}

export function JoinRoomCard({ onJoin, defaultRoomId = "", error }: JoinRoomCardProps) {
  const [roomId, setRoomId] = useState(defaultRoomId || "ARENA");
  const [playerName, setPlayerName] = useState("");

  const handleRandomRoom = () => {
    const code = "ROOM-" + Math.floor(1000 + Math.random() * 9000);
    setRoomId(code);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = playerName.trim() || `Bomber_${Math.floor(Math.random() * 100)}`;
    const finalRoom = (roomId.trim() || "ARENA").toUpperCase();
    onJoin(finalRoom, finalName);
  };

  return (
    <div className="w-full max-w-md bg-stone-900/90 border-2 border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/30 text-amber-500">
          <Bomb className="w-8 h-8 animate-pulse" />
        </div>
        <div>
          <h2 className="text-xl font-black uppercase text-stone-100 tracking-wider">
            Rejoindre l&apos;Arène
          </h2>
          <p className="text-xs text-stone-400">Jusqu&apos;à 4 joueurs en réseau simultané</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          label="Votre Pseudo"
          placeholder="Ex: MaxBomber"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          maxLength={12}
        />

        <div className="flex gap-2 items-end">
          <div className="flex-1">
            <Input
              label="Code du Salon"
              placeholder="Ex: ARENA"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value.toUpperCase())}
              maxLength={10}
            />
          </div>
          <Button
            type="button"
            variant="outline"
            className="mb-0.5 px-3 py-2.5 h-[46px]"
            onClick={handleRandomRoom}
            title="Générer un code aléatoire"
          >
            <Dices className="w-5 h-5" />
          </Button>
        </div>

        {error && (
          <div className="p-3 bg-rose-950/50 border border-rose-800/80 rounded-xl text-rose-300 text-xs font-mono">
            {error}
          </div>
        )}

        <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
          <Play className="w-5 h-5 fill-current" />
          Entrer dans le Salon
        </Button>
      </form>
    </div>
  );
}
