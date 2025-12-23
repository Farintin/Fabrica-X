// src/libs/api/leaderboardApi.ts

/* -------------------------------------------------------
   TYPES
------------------------------------------------------- */

export type PeriodFilter = "week" | "month" | "allTime";

export interface UserScores {
  week: number;
  month: number;
  allTime: number;
}

export interface LeaderboardEntryRaw {
  id: string;
  userId: string;
  scores: UserScores;
  joinedAt: string;
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

export interface PaginatedLeaderboardResponse {
  data: LeaderboardRow[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  hasMore: boolean;
}

/* -------------------------------------------------------
   MOCK DATA IMPORTS
------------------------------------------------------- */

import users from "@/data/users.json";

import lbFabricaX from "@/data/leaderboardEntries/lb-fabrica-x.json";
import lbChallenge1 from "@/data/leaderboardEntries/lb-challenge-1.json";
import lbChallenge2 from "@/data/leaderboardEntries/lb-challenge-2.json";
import lbChallenge3 from "@/data/leaderboardEntries/lb-challenge-3.json";

/* -------------------------------------------------------
   INTERNAL CONSTANTS
------------------------------------------------------- */

const PAGE_SIZE = 10;

const leaderboardMap: Record<string, LeaderboardEntryRaw[]> = {
  "lb-fabrica-x": lbFabricaX,
  "lb-challenge-1": lbChallenge1,
  "lb-challenge-2": lbChallenge2,
  "lb-challenge-3": lbChallenge3,
};

const userMap = new Map<string, User>(users.map((u) => [u.id, u]));

/* -------------------------------------------------------
   MAIN API FUNCTION
------------------------------------------------------- */

/**
 * Simulates a backend leaderboard API.
 * Handles sorting, ranking, pagination, and optional pinned user.
 */
export async function fetchLeaderboardData({
  leaderboardId,
  period,
  page = 1,
}: {
  leaderboardId: string;
  period: PeriodFilter;
  page?: number;
}): Promise<PaginatedLeaderboardResponse> {
  // ------------------------------------
  // ARTIFICIAL NETWORK LATENCY
  // ------------------------------------
  await new Promise((resolve) =>
    setTimeout(resolve, 400 + Math.random() * 400)
  );

  // ------------------------------------
  // LOAD LEADERBOARD DATA
  // ------------------------------------
  const rawEntries = leaderboardMap[leaderboardId];

  if (!rawEntries) {
    throw new Error(`Leaderboard "${leaderboardId}" not found`);
  }

  // ------------------------------------
  // SORT BY SELECTED PERIOD (DESC)
  // ------------------------------------
  const sorted = [...rawEntries].sort(
    (a, b) => b.scores[period] - a.scores[period]
  );

  // ------------------------------------
  // ASSIGN RANKS (SERVER-SIDE LOGIC)
  // ------------------------------------
  let lastScore = Infinity;
  let lastRank = 0;

  const ranked = sorted.map((entry, index) => {
    const score = entry.scores[period];
    if (score !== lastScore) {
      lastRank = index + 1;
      lastScore = score;
    }

    const user = userMap.get(entry.userId);

    return {
      userId: entry.userId,
      displayName: user?.displayName ?? "Unknown",
      avatarUrl: user?.avatarUrl ?? "",
      points: entry.scores[period],
      rank: lastRank,
    };
  });

  // ------------------------------------
  // PAGINATION
  // ------------------------------------
  const totalItems = ranked.length;
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);

  // ✅ CLAMP PAGE NUMBER
  const safePage = Math.max(1, Math.min(page, totalPages || 1));

  const start = (safePage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const paginated = ranked.slice(start, end);

  // ------------------------------------
  // RESPONSE
  // ------------------------------------
  return {
    data: paginated,
    totalItems,
    totalPages,
    currentPage: safePage,
    hasMore: safePage < totalPages,
  };
}
