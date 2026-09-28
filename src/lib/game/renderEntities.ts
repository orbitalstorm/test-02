import { BombState, PlayerState, PowerUpItem } from "@/types/game";
import { PLAYER_SLOTS, TILE_SIZE } from "./constants";

export function drawBomb(ctx: CanvasRenderingContext2D, bomb: BombState, now: number): void {
  let cx = (bomb.cellX + 0.5) * TILE_SIZE;
  let cy = (bomb.cellY + 0.5) * TILE_SIZE;
  let altitude = 0;

  if (bomb.flying) {
    const p = Math.min(1, Math.max(0, bomb.flying.progress));
    const curX = bomb.flying.startX + (bomb.flying.targetX - bomb.flying.startX) * p;
    const curY = bomb.flying.startY + (bomb.flying.targetY - bomb.flying.startY) * p;
    cx = (curX + 0.5) * TILE_SIZE;
    cy = (curY + 0.5) * TILE_SIZE;
    altitude = Math.sin(p * Math.PI) * 48; // saut en cloche par-dessus les murs
  }

  const pulse = Math.sin(now * 0.015) * 2;
  const radius = TILE_SIZE * 0.38 + pulse;

  // Ombre projetée au sol
  ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
  ctx.beginPath();
  ctx.ellipse(cx, cy + TILE_SIZE * 0.35, radius * 0.9, radius * 0.45, 0, 0, Math.PI * 2);
  ctx.fill();

  // Corps de la bombe (décalé vers le haut par l'altitude)
  const renderY = cy - altitude;
  const grad = ctx.createRadialGradient(cx - radius * 0.3, renderY - radius * 0.3, radius * 0.1, cx, renderY, radius);
  grad.addColorStop(0, "#64748b");
  grad.addColorStop(0.7, "#0f172a");
  grad.addColorStop(1, "#020617");

  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, renderY, radius, 0, Math.PI * 2);
  ctx.fill();

  // Mèche et étincelle
  ctx.fillStyle = "#94a3b8";
  ctx.fillRect(cx - 3, renderY - radius - 3, 6, 4);

  const sparkColors = ["#fbbf24", "#f97316", "#ef4444"];
  const sparkColor = sparkColors[Math.floor(now / 80) % sparkColors.length];
  ctx.fillStyle = sparkColor;
  ctx.beginPath();
  ctx.arc(cx, renderY - radius - 5, 3 + Math.random() * 2, 0, Math.PI * 2);
  ctx.fill();
}

export function drawPlayer(ctx: CanvasRenderingContext2D, player: PlayerState, isCurrent: boolean): void {
  if (!player.alive) return;
  const cx = player.x * TILE_SIZE;
  const cy = player.y * TILE_SIZE;
  const slotConf = PLAYER_SLOTS[player.slot] || PLAYER_SLOTS[0];
  const radius = TILE_SIZE * 0.36;

  ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
  ctx.beginPath();
  ctx.ellipse(cx, cy + radius * 0.9, radius * 0.85, radius * 0.45, 0, 0, Math.PI * 2);
  ctx.fill();

  if (isCurrent) {
    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(cx, cy, radius + 5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  ctx.fillStyle = slotConf.color;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.ellipse(cx, cy - 2, radius * 0.65, radius * 0.42, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#0f172a";
  ctx.beginPath();
  ctx.arc(cx - 4, cy - 2, 2.5, 0, Math.PI * 2);
  ctx.arc(cx + 4, cy - 2, 2.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = slotConf.accentColor;
  ctx.beginPath();
  ctx.arc(cx, cy - radius - 3, 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 10px monospace";
  ctx.textAlign = "center";
  ctx.fillText(player.name.substring(0, 10), cx, cy - radius - 8);
}

const POWERUP_ICONS: Record<string, string> = {
  flame: "🔥",
  bomb: "💣",
  speed: "⚡",
  kick: "👟",
  punch: "🥊",
  slow: "🐢",
  skull: "💀",
};

export function drawPowerUp(ctx: CanvasRenderingContext2D, item: PowerUpItem, now: number): void {
  const cx = (item.cellX + 0.5) * TILE_SIZE;
  const cy = (item.cellY + 0.5) * TILE_SIZE;
  const bob = Math.sin(now * 0.008 + item.cellX) * 3;
  const isMalus = item.type === "slow" || item.type === "skull";

  ctx.fillStyle = isMalus ? "#3b0764" : "#1e293b";
  ctx.beginPath();
  ctx.roundRect(cx - 16, cy - 16 + bob, 32, 32, 6);
  ctx.fill();

  ctx.strokeStyle = isMalus ? "#a855f7" : "#f59e0b";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.font = "16px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(POWERUP_ICONS[item.type] || "❓", cx, cy + bob);
}
