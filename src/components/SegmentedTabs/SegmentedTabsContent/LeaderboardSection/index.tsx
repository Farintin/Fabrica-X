// src/components/screens/SegmentedTabs/index.tsx
import { useTheme } from "@/src/hooks/useTheme";
import { View, ActivityIndicator } from "react-native";
// Assuming RankTypeCard and LastRankTypeCard are the list items you created
import Button from "@/src/components/ui/Button/Button";
import { useLeaderboardApi } from "@/src/hooks/useLeaderboardApi"; // 👈 IMPORT THE HOOK
import { useRouter } from "expo-router";
import { LeaderboardList } from "@/src/components/ui/Leaderboard/LeaderboardList";
import { LeaderboardTabHeader } from "@/src/components/ui/Leaderboard/LeaderboardTabHeader";

// --- 3. Default Export Component ---
export default function LeaderboardSection() {
  const theme = useTheme();
  const router = useRouter();

  // 👈 CALL THE API HOOK ONCE HERE
  const apiState = useLeaderboardApi();
  const { isLoading, data, loadNextPage, hasMore, isFetchingNextPage } =
    apiState;

  // Show a full screen loading indicator if it's the very first load
  if (isLoading && data.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: theme.spacing.lg,
          // backgroundColor: "blue",
        }}
      >
        <ActivityIndicator size={"small"} color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <View
      style={{
        gap: theme.spacing.sm,
      }}
    >
      {/* Pass required state down to the Header */}
      <LeaderboardTabHeader />

      {/* Pass required state and handlers down to the List */}
      <LeaderboardList
        data={data}
        isLoading={isLoading}
        isFetchingNextPage={isFetchingNextPage}
        loadNextPage={loadNextPage}
        scrollEnabled={false}
      />

      {/* Hide View All button if there are no more pages to load */}
      {hasMore && (
        <Button
          label="view all"
          onPress={() => router.push("/leaderboard")} // Or navigate to a dedicated Leaderboard screen
          style={{
            alignSelf: "center",
            paddingVertical: theme.spacing.sm + 6,
            paddingHorizontal: theme.spacing.md + 6,
          }}
          labelStyle={[
            theme.typography.title, // Use button style from theme
            { textTransform: "uppercase" },
          ]}
        />
      )}
    </View>
  );
}
