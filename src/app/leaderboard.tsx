// src/app/leaderboard.tsx
import { ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated from "react-native-reanimated";

import { useLeaderboardApi } from "@/hooks/useLeaderboardApi";
import { useTheme } from "@/hooks/useTheme";

import LeaderboardHeader from "@/components/ui/Header/LeaderboardHeader";
import LeaderboardList from "@/components/ui/Leaderboard/LeaderboardList";
import LeaderboardFilterModal from "@/components/ui/Leaderboard/LeaderboardFilterModal";
import { LastRankPreviewCard } from "@/components/ui/Cards";
import { LeaderboardNavButton } from "@/components/ui/Button";
import SvgIcon from "@/components/ui/SvgIcon";
import { lastRankEnter } from "@/components/ui/Leaderboard/animations";
import { View } from "@/components/Themed";
import { LEADERBOARDS } from "@/constants/Leaderboards";

export default function Leaderboard() {
  const theme = useTheme();
  const { top, bottom } = useSafeAreaInsets();

  const [headerReady, setHeaderReady] = useState(false);
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

  useEffect(() => {
    requestAnimationFrame(() => setHeaderReady(true));
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background.black,
        paddingTop: top,
        gap: theme.spacing.sm,
      }}
    >
      <LeaderboardHeader />

      {/* Controls */}
      <View
        style={{
          flexDirection: "row",
          gap: theme.spacing.md,
          paddingHorizontal: theme.spacing.base,
          paddingVertical: theme.spacing.xs,
        }}
      >
        <LeaderboardNavButton
          label="Filter"
          onPress={() => setShowFilter(true)}
          contentLeft={
            <SvgIcon name="setting" color={theme.colors.primary} size={20} />
          }
        />

        <LeaderboardNavButton
          label={LEADERBOARDS.find((lb) => lb.id === leaderboardId)?.label}
          disabled
          style={{ flexGrow: 1 }}
        />
      </View>

      {/* Leaderboard Selector (Figma position) */}

      {/* Last Rank Preview */}
      {isLoading && data.length === 0 ? (
        <ActivityIndicator
          color={theme.colors.primary}
          style={{ marginTop: theme.spacing.sm }}
        />
      ) : (
        lastRank &&
        headerReady && (
          <Animated.View entering={lastRankEnter}>
            <LastRankPreviewCard
              {...lastRank}
              style={{ marginHorizontal: theme.spacing.base }}
            />
          </Animated.View>
        )
      )}

      {/* List */}
      <View style={{ flex: 1 }}>
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
      </View>

      {/* Filter Modal */}
      <LeaderboardFilterModal
        visible={showFilter}
        period={period}
        leaderboardId={leaderboardId}
        onSelectPeriod={setPeriod}
        onSelectLeaderboard={setLeaderboardId}
        onClose={() => setShowFilter(false)}
      />
    </View>
  );
}
