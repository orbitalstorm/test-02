"use client";

import { useGameSocket } from "@/hooks/useGameSocket";
import { JoinRoomCard } from "@/components/features/lobby/JoinRoomCard";
import { LobbyRoomView } from "@/components/features/lobby/LobbyRoomView";
import { GameArena } from "@/components/features/game/GameArena";

export function GameClientContainer() {
  const {
    snapshot,
    myPlayerId,
    isConnected,
    errorMsg,
    connect,
    disconnect,
    sendMessage,
  } = useGameSocket();

  const handleJoin = (roomId: string, playerName: string) => {
    const wsHost = typeof window !== "undefined" ? window.location.hostname : "localhost";
    const wsUrl = `ws://${wsHost}:3001`;
    connect(wsUrl, roomId, playerName);
  };

  const handleSetReady = (ready: boolean) => {
    sendMessage({ type: "set_ready", ready });
  };

  const handleStartGame = () => {
    sendMessage({ type: "start_game" });
  };

  if (!isConnected || !snapshot) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[75vh] w-full px-4">
        <JoinRoomCard onJoin={handleJoin} error={errorMsg} />
      </div>
    );
  }

  if (snapshot.status === "waiting") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[75vh] w-full px-4">
        <LobbyRoomView
          snapshot={snapshot}
          currentPlayerId={myPlayerId}
          onSetReady={handleSetReady}
          onStartGame={handleStartGame}
          onLeave={disconnect}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] w-full px-4 py-6">
      <GameArena
        snapshot={snapshot}
        currentPlayerId={myPlayerId}
        sendMessage={sendMessage}
        onLeave={disconnect}
      />
    </div>
  );
}
