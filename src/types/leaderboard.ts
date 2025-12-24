// src/types/leaderboard.ts
export type PeriodFilter = "week" | "month" | "allTime";

export interface UserScores {
  week: number;
  month: number;
  allTime: number;
}

export interface User {
  id: string;
  displayName: string;
  avatarUrl: string;
}

export interface LeaderboardRow {
  userId: string;
  displayName: string;
  avatarUrl: string;
  points: number;
  rank: number;
}
