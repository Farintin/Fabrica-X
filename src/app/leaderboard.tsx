import { ActivityIndicator, View } from "react-native";
import { PeriodFilter } from "@/src/libs/api/leaderboardApi";
import { LastRankPreviewCard } from "@/src/components/ui/Cards";
import { useLeaderboardApi } from "@/hooks/useLeaderboardApi";
import { useTheme } from "../hooks/useTheme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LeaderboardHeader from "../components/ui/Header/LeaderboardHeader";
import ButtonOutlined from "../components/ui/Button/ButtonOutlined";
import SvgIcon from "../components/ui/SvgIcon";
import { useState } from "react";
import LeaderboardFilterModal from "../components/ui/Leaderboard/LeaderboardFilterModal";
import { useRouter } from "expo-router";
import { LeaderboardList } from "../components/ui/Leaderboard/LeaderboardList";

export default function Leaderboard() {
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

      {/* Filter button row */}
      <View
        style={{
          flexDirection: "row",
          gap: theme.spacing.sm + 2,
          paddingHorizontal: theme.spacing.md,
          paddingVertical: theme.spacing.xs,
        }}
      >
        <ButtonOutlined
          label="Filter"
          color="#31313180"
          borderColor="#E6E6E6"
          onPress={() => setShowFilter(true)}
          contentLeft={
            <SvgIcon name="setting" color={theme.colors.primary} size={20} />
          }
        />

        <ButtonOutlined
          label="Fabrica X"
          color="#31313180"
          borderColor="#E6E6E6"
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
        lastRank && (
          <LastRankPreviewCard
            userId={lastRank.id}
            {...lastRank}
            style={{ marginHorizontal: theme.spacing.md }}
          />
        )
      )}

      {/* List */}
      <View
        style={{
          flex: 1,
          paddingHorizontal: theme.spacing.md,
        }}
      >
        <LeaderboardList
          data={data}
          isLoading={isLoading}
          loadNextPage={loadNextPage}
          isFetchingNextPage={isFetchingNextPage}
          contentContainerStyle={{
            paddingBottom: bottom,
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
