import React from "react";
import { useTheme } from "@/src/hooks/useTheme";
import {
  FlatList,
  View,
  Text,
  ViewProps,
  ActivityIndicator,
} from "react-native";
// Assuming RankTypeCard and LastRankTypeCard are the list items you created
import { LastRankTypeCard, RankTypeCard } from "./cards";
import OutlineButton from "@/src/components/ui/Button/ButtonOutlined";
import Button from "@/src/components/ui/Button/Button";
import { useLeaderboardApi, PeriodFilter } from "@/src/hooks/useLeaderboardApi"; // 👈 IMPORT THE HOOK
import { LeaderboardUser } from "@/src/api/leaderboardApi";
import { router } from "expo-router";

// --- 1. LeaderboardList Component ---
// This component now receives props from the hook

export const LeaderboardList = ({
  data,
  isLoading,
  loadNextPage,
  scrollEnabled = true,
}: {
  data: LeaderboardUser[];
  isLoading: boolean;
  loadNextPage: () => void;
  scrollEnabled?: boolean;
}) => {
  const theme = useTheme();

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <RankTypeCard userId={item.id} {...item} />}
      scrollEnabled={scrollEnabled}
      onEndReached={loadNextPage}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        isLoading ? (
          <ActivityIndicator
            color={theme.colors.primary}
            style={{ paddingVertical: theme.spacing.lg }}
          />
        ) : null
      }
    />
  );
};

// --- 2. LeaderboardHeader Component ---
// This component now displays the current user's rank based on the hook data
export const LeaderboardHeader = ({ style }: ViewProps) => {
  const theme = useTheme();

  const apiState = useLeaderboardApi();
  const { data, isLoading, filter, setFilter } = apiState;
  // Find the last item (lowest rank displayed)
  const lastRank = data.length > 0 ? data[data.length - 1] : undefined;

  // Static Period Filter buttons placeholder (optional: expand this into a segmented control later)
  const filters: PeriodFilter[] = ["This Week", "This Month", "All Time"];

  return (
    <View style={[style]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: theme.spacing.md,
        }}
      >
        <Text
          style={{
            ...theme.typography.heading, // Changed to h2 based on the mockups
            color: theme.colors.textPrimary,
          }}
        >
          Leaderboard
        </Text>
        <OutlineButton
          label="View more"
          size="small"
          onPress={() => router.push("/leaderboard")}
        />
      </View>

      {/* Optional: Add Period Filters here for functionality */}
      {/* <View style={{ flexDirection: "row", gap: theme.spacing.sm }}>
          {filters.map((f) => (
            <Button
              key={f}
              label={f}
              onPress={() => setFilter(f)}
              style={{
                backgroundColor:
                  filter === f ? theme.colors.primary : theme.colors.surface,
                paddingHorizontal: theme.spacing.md,
              }}
              labelStyle={{
                color:
                  filter === f
                    ? theme.colors.buttonForeground
                    : theme.colors.textPrimary,
                ...theme.typography.buttonSmall,
              }}
            />
          ))}
        </View> */}

      {/* Display the current user's (or lowest fetched) rank */}
      {isLoading && data.length === 0 ? (
        <ActivityIndicator
          color={theme.colors.primary}
          style={{ marginTop: theme.spacing.sm }}
        />
      ) : (
        lastRank && (
          <LastRankTypeCard
            // 🎯 THE FIX: Explicitly map 'id' to 'userId'
            userId={lastRank.id}
            // Spread the rest of the properties from the data object
            {...lastRank}
          />
        )
      )}
    </View>
  );
};

// --- 3. Default Export Component ---
export default function LeaderboardSection() {
  const theme = useTheme();

  // 👈 CALL THE API HOOK ONCE HERE
  const apiState = useLeaderboardApi();
  const { isLoading, data, loadNextPage, hasMore } = apiState;

  // Show a full screen loading indicator if it's the very first load
  if (isLoading && data.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <View style={{ paddingVertical: 0, gap: theme.spacing.sm }}>
      {/* Pass required state down to the Header */}
      <LeaderboardHeader />

      {/* Pass required state and handlers down to the List */}

      <LeaderboardList
        data={data}
        isLoading={isLoading}
        loadNextPage={loadNextPage}
        scrollEnabled={false}
      />

      {/* Hide View All button if there are no more pages to load */}
      {hasMore && (
        <Button
          label="View All"
          onPress={loadNextPage} // Or navigate to a dedicated Leaderboard screen
          style={{
            alignSelf: "center",
            paddingVertical: theme.spacing.sm + 6,
            paddingHorizontal: theme.spacing.lg,
          }}
          labelStyle={[
            theme.typography.button, // Use button style from theme
            { textTransform: "uppercase" },
          ]}
        />
      )}
    </View>
  );
}
