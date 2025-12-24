// src/hooks/useLeaderboardApi.ts
import { useState, useEffect, useCallback } from "react";
import { fetchLeaderboardData } from "@/libs/api/leaderboardApi";
import { LeaderboardId } from "@/constants/Leaderboards";
import { LeaderboardRow, PeriodFilter } from "@/types/leaderboard";

/* -------------------------------------------------------
   STATE
------------------------------------------------------- */

interface LeaderboardState {
  data: LeaderboardRow[];
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasMore: boolean;
  error: string | null;
  period: PeriodFilter;
  leaderboardId: LeaderboardId;
  currentPage: number;
}

const INITIAL_STATE: Omit<LeaderboardState, "leaderboardId"> = {
  data: [],
  isLoading: false,
  isFetchingNextPage: false,
  hasMore: true,
  error: null,
  period: "week",
  currentPage: 1,
};

/* -------------------------------------------------------
   HOOK
------------------------------------------------------- */

export function useLeaderboardApi({
  leaderboardId: initialLeaderboardId,
}: {
  leaderboardId: LeaderboardId;
}) {
  const [state, setState] = useState<LeaderboardState>({
    ...INITIAL_STATE,
    leaderboardId: initialLeaderboardId,
  });

  /* -------------------------------------------------------
     FETCH
  ------------------------------------------------------- */

  const loadPage = useCallback(
    async (page: number, isInitial = false) => {
      setState((s) => ({
        ...s,
        isLoading: isInitial,
        isFetchingNextPage: !isInitial,
      }));

      try {
        const response = await fetchLeaderboardData({
          leaderboardId: state.leaderboardId,
          period: state.period,
          page,
        });

        setState((s) => ({
          ...s,
          data: page === 1 ? response.data : [...s.data, ...response.data],
          hasMore: response.hasMore,
          currentPage: response.currentPage,
          isLoading: false,
          isFetchingNextPage: false,
          error: null,
        }));
      } catch {
        setState((s) => ({
          ...s,
          isLoading: false,
          isFetchingNextPage: false,
          error: "Failed to load leaderboard",
        }));
      }
    },
    [state.leaderboardId, state.period]
  );

  /* -------------------------------------------------------
     RELOAD ON FILTER CHANGE
  ------------------------------------------------------- */

  useEffect(() => {
    loadPage(1, true);
  }, [state.leaderboardId, state.period, loadPage]);

  /* -------------------------------------------------------
     ACTIONS
  ------------------------------------------------------- */

  const loadNextPage = () => {
    if (state.isLoading || state.isFetchingNextPage || !state.hasMore) return;
    loadPage(state.currentPage + 1);
  };

  const setPeriod = (period: PeriodFilter) => {
    setState((s) =>
      s.period === period
        ? s
        : {
            ...s,
            period,
            data: [],
            currentPage: 1,
            hasMore: true,
          }
    );
  };

  const setLeaderboardId = (id: LeaderboardId) => {
    setState((s) =>
      s.leaderboardId === id
        ? s
        : {
            ...s,
            leaderboardId: id,
            data: [],
            currentPage: 1,
            hasMore: true,
          }
    );
  };

  return {
    ...state,
    setPeriod,
    setLeaderboardId,
    loadNextPage,
  };
}
