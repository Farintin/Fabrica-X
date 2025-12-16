// src/hooks/useLeaderboardApi.ts
import { useState, useEffect, useCallback } from "react";
import {
  fetchLeaderboardData,
  LeaderboardUser,
  PeriodFilter,
} from "../libs/api/leaderboardApi";

interface LeaderboardState {
  data: LeaderboardUser[];
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasMore: boolean;
  error: string | null;
  filter: PeriodFilter;
  currentPage: number;
}
const initialState: LeaderboardState = {
  data: [],
  isLoading: false,
  isFetchingNextPage: false,
  hasMore: true,
  error: null,
  filter: "This Week",
  currentPage: 1,
};

export const useLeaderboardApi = () => {
  const [state, setState] = useState<LeaderboardState>({
    ...initialState,
    currentPage: 1,
  });

  const loadData = useCallback(
    async (
      targetFilter: PeriodFilter,
      pageToLoad: number,
      isInitialLoad = false
    ) => {
      if (isInitialLoad) {
        setState((s) => ({ ...s, isLoading: true }));
      } else {
        setState((s) => ({ ...s, isFetchingNextPage: true }));
      }

      try {
        const response = await fetchLeaderboardData(targetFilter, pageToLoad);

        setState((s) => ({
          ...s,
          data:
            pageToLoad === 1 ? response.data : [...s.data, ...response.data],
          hasMore: response.hasMore,
          currentPage: response.currentPage,
          isLoading: false,
          isFetchingNextPage: false,
          error: null,
        }));
      } catch {
        setState((s) => ({
          ...s,
          error: "Failed to fetch leaderboard data.",
          isLoading: false,
          isFetchingNextPage: false,
        }));
      }
    },
    []
  );

  useEffect(() => {
    loadData(state.filter, 1, true);
  }, [state.filter]);

  const loadNextPage = () => {
    if (!state.hasMore || state.isLoading || state.isFetchingNextPage) return;
    loadData(state.filter, state.currentPage + 1);
  };

  const setFilter = (newFilter: PeriodFilter) => {
    if (newFilter !== state.filter) {
      setState((s) => ({
        ...s,
        filter: newFilter,
        data: [],
        currentPage: 1,
        hasMore: true,
      }));
    }
  };

  return {
    ...state,
    setFilter,
    loadNextPage,
  };
};

export { PeriodFilter };
