import { UserScores } from "../leaderboard";

export interface LeaderboardEntryRaw {
  id: string;
  userId: string;
  scores: UserScores;
  joinedAt: string;
}
