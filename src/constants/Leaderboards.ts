// src/constants/leaderboards.ts

export const LEADERBOARDS = [
  {
    id: "lb-fabrica-x",
    label: "Fabrica X",
  },
  {
    id: "lb-challenge-1",
    label: "Challenge 1",
  },
  {
    id: "lb-challenge-2",
    label: "Challenge 2",
  },
  {
    id: "lb-challenge-3",
    label: "Challenge 3",
  },
] as const;

export type LeaderboardId = (typeof LEADERBOARDS)[number]["id"];

export const PERIOD_OPTIONS = [
  { label: "All Time", value: "allTime" },
  { label: "This Week", value: "week" },
  { label: "This Month", value: "month" },
] as const;
