// src/screens/Leaderboard/index.tsx
import { ActivityIndicator } from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated from "react-native-reanimated";

import { useLeaderboardApi } from "@/hooks/useLeaderboardApi";
import { useTheme } from "@/hooks/theme/useTheme";

import LeaderboardList from "@/components/Leaderboard/LeaderboardList";
import LeaderboardFilterModal from "@/components/Leaderboard/LeaderboardFilterModal";
import { LastPreviewRankCard } from "@/components/ui/Cards";
import { lastRankEnter } from "@/components/Leaderboard/animations";
import { ThemedView } from "@/components/Themed";
import AnimatedLeaderboardHeader from "@/components/ui/Header/AnimatedLeaderboardHeader";
import AnimatedLeaderboardControls from "@/components/Leaderboard/AnimatedLeaderboardControls";

export default function LeaderboardScreen() {
  const theme = useTheme();
  const { top, bottom } = useSafeAreaInsets();

  const [showFilter, setShowFilter] = useState(false);

  const {
    data,
    leaderboardId,
    setLeaderboardId,
    period,
    setPeriod,
    isLoading,
    loadNextPage,
    isFetchingNextPage,
  } = useLeaderboardApi({
    leaderboardId: "lb-fabrica-x",
  });

  const lastRank = data.at(-1);

  return (
    <ThemedView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background.black,
        paddingTop: top,
        gap: theme.spacing.sm,
      }}
    >
      <AnimatedLeaderboardHeader />

      <AnimatedLeaderboardControls
        leaderboardId={leaderboardId}
        showFilterHandler={() => setShowFilter(true)}
      />

      {/* Last Rank PreThemedView */}
      {isLoading && data.length === 0 ? (
        <ActivityIndicator
          color={theme.colors.primary}
          style={{ margin: theme.spacing.wide }}
        />
      ) : (
        lastRank && (
          <Animated.View entering={lastRankEnter}>
            <LastPreviewRankCard
              {...lastRank}
              style={{ marginHorizontal: theme.spacing.base }}
            />
          </Animated.View>
        )
      )}

      {/* List */}
      <ThemedView style={{ flex: 1 }}>
        <LeaderboardList
          data={data}
          isLoading={isLoading}
          loadNextPage={loadNextPage}
          isFetchingNextPage={isFetchingNextPage}
          contentContainerStyle={{
            paddingBottom: bottom,
            paddingHorizontal: theme.spacing.base,
          }}
        />
      </ThemedView>

      {/* Filter Modal */}
      <LeaderboardFilterModal
        visible={showFilter}
        period={period}
        leaderboardId={leaderboardId}
        onSelectPeriod={setPeriod}
        onSelectLeaderboard={setLeaderboardId}
        onClose={() => setShowFilter(false)}
      />
    </ThemedView>
  );
}
