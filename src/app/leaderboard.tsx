// src/app/leaderboard.tsx
import { ActivityIndicator } from "react-native";
import { PeriodFilter } from "@/src/libs/api/leaderboardApi";
import { LastRankPreviewCard } from "@/src/components/ui/Cards";
import { useLeaderboardApi } from "@/hooks/useLeaderboardApi";
import { useTheme } from "../hooks/useTheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LeaderboardHeader from "../components/ui/Header/LeaderboardHeader";
import SvgIcon from "../components/ui/SvgIcon";
import { useEffect, useState } from "react";
import LeaderboardFilterModal from "../components/ui/Leaderboard/LeaderboardFilterModal";
import { useRouter } from "expo-router";
import LeaderboardList from "../components/ui/Leaderboard/LeaderboardList";
import Animated from "react-native-reanimated";
import { lastRankEnter } from "@/src/components/ui/Leaderboard/animations";
import { LeaderboardNavButton } from "../components/ui/Button";
import { View } from "../components/Themed";

export default function Leaderboard() {
  const [headerReady, setHeaderReady] = useState(false);

  const [showFilter, setShowFilter] = useState(false);
  const theme = useTheme();
  const { top, bottom } = useSafeAreaInsets();

  const router = useRouter();

  const goBackHandler = () => {
    router.canGoBack() ? router.back() : null;
  };

  const {
    data,
    filter,
    setFilter,
    isLoading,
    loadNextPage,
    isFetchingNextPage,
  } = useLeaderboardApi();

  const lastRank = data.length > 0 ? data[data.length - 1] : undefined;

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
          label="Fabrica X"
          onPress={goBackHandler}
          style={{ flexGrow: 1 }}
        />
      </View>

      {/* Last rank */}
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
              userId={lastRank.id}
              {...lastRank}
              style={{ marginHorizontal: theme.spacing.base }}
            />
          </Animated.View>
        )
      )}

      {/* List */}
      <View
        style={{
          flex: 1,
        }}
      >
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

      <LeaderboardFilterModal
        visible={showFilter}
        value={filter}
        onSelect={(period: PeriodFilter) => {
          setFilter(period); // 🔥 triggers API refetch + sort
          setShowFilter(false);
        }}
        onClose={() => setShowFilter(false)}
      />
    </View>
  );
}
