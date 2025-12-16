// src/components/screens/SegmentedTabs/index.tsx
import { useTheme } from "@/src/hooks/useTheme";
import {
  FlatList,
  View,
  Text,
  ViewProps,
  ActivityIndicator,
  FlatListProps,
  VirtualizedListProps,
  ScrollViewProps,
} from "react-native";
// Assuming RankTypeCard and LastRankTypeCard are the list items you created
import { LastRankTypeCard, RankTypeCard } from "./cards";
import OutlineButton from "@/src/components/ui/Button/ButtonOutlined";
import Button from "@/src/components/ui/Button/Button";
import { useLeaderboardApi, PeriodFilter } from "@/src/hooks/useLeaderboardApi"; // 👈 IMPORT THE HOOK
import { LeaderboardUser } from "@/src/libs/api/leaderboardApi";
import { router, useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";

// --- 1. LeaderboardList Component ---
// This component now receives props from the hook
export const LeaderboardList = ({
  data,
  isLoading,
  isFetchingNextPage = false,
  loadNextPage,
  scrollEnabled = true,
  ...restProps
}: {
  data: LeaderboardUser[];
  isLoading: boolean;
  isFetchingNextPage?: boolean;
  loadNextPage: () => void;
  scrollEnabled?: boolean;
} & ScrollViewProps) => {
  const theme = useTheme();

  return (
    <>
      {scrollEnabled ? (
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <RankTypeCard key={String(item.id)} userId={item.id} {...item} />
          )}
          onEndReached={() => {
            loadNextPage();
          }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isFetchingNextPage ? (
              <ActivityIndicator
                color={theme.colors.primary}
                style={{ paddingVertical: theme.spacing.lg }}
              />
            ) : null
          }
          {...restProps}
        />
      ) : (
        <View>
          {/* CORRECTED MAP SYNTAX */}
          {data.map((item) => (
            <RankTypeCard key={String(item.id)} userId={item.id} {...item} />
          ))}
          {/* List Footer for non-scrollable list (if needed) */}
          {isFetchingNextPage ? (
            <ActivityIndicator
              color={theme.colors.primary}
              style={{ paddingVertical: theme.spacing.lg }}
            />
          ) : null}
        </View>
      )}
    </>
  );
};

// --- 2. LeaderboardHeader Component ---
// This component now displays the current user's rank based on the hook data
export const LeaderboardHeader = ({ style }: ViewProps) => {
  const theme = useTheme();

  const apiState = useLeaderboardApi();
  const { data } = apiState;
  // Find the last item (lowest rank displayed)
  const lastRank = data.length > 0 ? data[data.length - 1] : undefined;

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

      {lastRank && (
        <LastRankTypeCard
          // 🎯 THE FIX: Explicitly map 'id' to 'userId'
          userId={lastRank.id}
          // Spread the rest of the properties from the data object
          {...lastRank}
        />
      )}
    </View>
  );
};

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
        }}
      >
        <ActivityIndicator size={"large"} color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <View
      style={{
        paddingVertical: 0,
        gap: theme.spacing.sm,
      }}
    >
      {/* Pass required state down to the Header */}
      <LeaderboardHeader />

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
