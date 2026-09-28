import { z } from "zod";

export const ClientMessageSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("join_room"),
    roomId: z.string().min(1).max(20),
    playerName: z.string().min(1).max(15),
  }),
  z.object({
    type: z.literal("leave_room"),
  }),
  z.object({
    type: z.literal("set_ready"),
    ready: z.boolean(),
  }),
  z.object({
    type: z.literal("start_game"),
  }),
  z.object({
    type: z.literal("move"),
    direction: z.enum(["up", "down", "left", "right", "idle"]),
  }),
  z.object({
    type: z.literal("stop_move"),
  }),
  z.object({
    type: z.literal("plant_bomb"),
  }),
  z.object({
    type: z.literal("punch_bomb"),
  }),
  z.object({
    type: z.literal("restart_round"),
  }),
]);

export type ValidatedClientMessage = z.infer<typeof ClientMessageSchema>;
