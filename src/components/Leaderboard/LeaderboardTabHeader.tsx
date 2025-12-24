// src/components/ui/Leaderboard/LeaderboardTabHeader.tsx
import { useLeaderboardApi } from "@/hooks/useLeaderboardApi";
import { router } from "expo-router";
import Animated from "react-native-reanimated";
import { useTheme } from "@/hooks/theme/useTheme";
import { lastRankEnter, lastRankEnterDelayed } from "./animations";
import { ThemedViewProps, ThemedView } from "@/components/Themed";
import { Heading } from "@/components/typography/Heading";
import { OutlinedButton } from "@/components/ui/Button";
import { LastPreviewRankCard } from "@/components/ui/Cards";

// --- 2. LeaderboardHeader Component ---
// This component now displays the current user's rank based on the hook data
export default function LeaderboardTabHeader({
  isSticky = false,
  style,
}: { isSticky?: boolean } & ThemedViewProps) {
  const theme = useTheme();

  const apiState = useLeaderboardApi({
    leaderboardId: "lb-fabrica-x",
  });
  const { data } = apiState;
  // Find the last item (lowest rank displayed)
  const lastRank = data.length > 0 ? data[data.length - 1] : undefined;

  return (
    <ThemedView style={[style]}>
      <ThemedView
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
      </ThemedView>

      {lastRank && (
        <Animated.View
          entering={isSticky ? lastRankEnter : lastRankEnterDelayed}
        >
          <LastPreviewRankCard
            // Spread the rest of the properties from the data object
            {...lastRank}
          />
        </Animated.View>
      )}
    </ThemedView>
  );
}
