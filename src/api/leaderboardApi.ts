// src/api/leaderboardApi.ts

// 1. Define Types for Clarity and Safety
export type PeriodFilter = "This Week" | "This Month" | "All Time";

export interface UserPoints {
  week: number;
  month: number;
  allTime: number;
}

export interface LeaderboardUser {
  id: number;
  name: string;
  avatarUrl: string;
  points: UserPoints;
  joinDate?: string;
  rank: number; // Will be added during processing
}

export interface PaginatedResponse {
  data: LeaderboardUser[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  hasMore: boolean;
}

// 2. Import Mock Data
import mockData from "../data/mockLeaderboardData.json";
const DATA_PER_PAGE = 10;

/**
 * Simulates an asynchronous API call to fetch leaderboard data.
 * Includes filtering, sorting, pagination, and artificial delay.
 */
export async function fetchLeaderboardData(
  filter: PeriodFilter,
  page: number = 1
): Promise<PaginatedResponse> {
  // ------------------------------------
  // A. SIMULATE API DELAY (300ms - 800ms)
  // ------------------------------------
  const delay = Math.floor(Math.random() * (800 - 300 + 1)) + 800;
  await new Promise((resolve) => setTimeout(resolve, delay));

  // ------------------------------------
  // B. FILTER & SORT THE DATA
  // ------------------------------------

  // Determine which point field to use for sorting
  let scoreKey: keyof UserPoints;
  if (filter === "This Week") {
    scoreKey = "week";
  } else if (filter === "This Month") {
    scoreKey = "month";
  } else {
    scoreKey = "allTime";
  }

  // 1. Sort the full dataset by the selected scoreKey (highest score first)
  const sortedData = [...mockData].sort(
    (a, b) => b.points[scoreKey] - a.points[scoreKey]
  );

  // 2. Add the rank to each user object (this is done on the server in a real API)
  const rankedData: LeaderboardUser[] = sortedData.map((user, index) => ({
    ...user,
    rank: index + 1,
  })) as LeaderboardUser[];

  // ------------------------------------
  // C. PAGINATION
  // ------------------------------------
  const totalItems = rankedData.length;
  const totalPages = Math.ceil(totalItems / DATA_PER_PAGE);

  // Calculate start and end indexes for the current page
  const startIndex = (page - 1) * DATA_PER_PAGE;
  const endIndex = startIndex + DATA_PER_PAGE;

  // Slice the data for the current page
  const paginatedData = rankedData.slice(startIndex, endIndex);

  // ------------------------------------
  // D. RETURN THE RESPONSE
  // ------------------------------------
  return {
    data: paginatedData,
    totalItems,
    totalPages,
    currentPage: page,
    hasMore: page < totalPages,
  };
}
