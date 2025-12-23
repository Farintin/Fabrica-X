// src/components/ui/Leaderboard/LeaderboardTabHeader.tsx
import { useLeaderboardApi } from "@/hooks/useLeaderboardApi";
import { router } from "expo-router";
import { ViewProps, View, Text } from "react-native";
import Animated from "react-native-reanimated";
import { LastRankPreviewCard } from "../Cards";
import { useTheme } from "@/hooks/useTheme";
import OutlinedButton from "../Button/OutlinedButton";
import { lastRankEnter, lastRankEnterDelayed } from "./animations";
import { Heading } from "../../typography/Heading";

// --- 2. LeaderboardHeader Component ---
// This component now displays the current user's rank based on the hook data
export default function LeaderboardTabHeader({
  isSticky = false,
  style,
}: { isSticky?: boolean } & ViewProps) {
  const theme = useTheme();

  const apiState = useLeaderboardApi({
    leaderboardId: "lb-fabrica-x",
  });
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
          paddingVertical: theme.spacing.base,
        }}
      >
        <Heading>Leaderboard</Heading>

        <OutlinedButton
          label="View more"
          size="small"
          onPress={() => router.push("/leaderboard")}
        />
      </View>

      {lastRank && (
        <Animated.View
          entering={isSticky ? lastRankEnter : lastRankEnterDelayed}
        >
          <LastRankPreviewCard
            // Spread the rest of the properties from the data object
            {...lastRank}
          />
        </Animated.View>
      )}
    </View>
  );
}
