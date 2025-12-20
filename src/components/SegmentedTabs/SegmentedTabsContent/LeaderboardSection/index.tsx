// src/components/screens/SegmentedTabs/index.tsx
import { useTheme } from "@/src/hooks/useTheme";
import { View, ActivityIndicator } from "react-native";
import Button from "@/src/components/ui/Button/Button";
import { useLeaderboardApi } from "@/src/hooks/useLeaderboardApi"; // 👈 IMPORT THE HOOK
import { useRouter } from "expo-router";
import LeaderboardList from "@/src/components/ui/Leaderboard/LeaderboardList";
import LeaderboardTabHeader from "@/src/components/ui/Leaderboard/LeaderboardTabHeader";

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
    <View>
      {/* Pass required state down to the Header */}
      <LeaderboardTabHeader style={{ marginBottom: theme.spacing.sm }} />

      {/* Pass required state and handlers down to the List */}
      <LeaderboardList
        data={data}
        isLoading={isLoading}
        isFetchingNextPage={isFetchingNextPage}
        loadNextPage={loadNextPage}
        scrollEnabled={false}
      />

      {hasMore && (
        <Button
          label="view all"
          onPress={() => router.push("/leaderboard")}
          style={{
            alignSelf: "center",
            paddingVertical: theme.spacing.md,
            paddingHorizontal: theme.spacing.xl,
          }}
          labelStyle={[theme.typography.title, { textTransform: "uppercase" }]}
        />
      )}
    </View>
  );
}
