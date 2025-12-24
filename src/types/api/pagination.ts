import { LeaderboardRow } from "../leaderboard";

export interface PaginatedLeaderboardResponse {
  data: LeaderboardRow[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  hasMore: boolean;
}
