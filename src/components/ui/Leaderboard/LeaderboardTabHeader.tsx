// src/components/ui/Leaderboard/LeaderboardTabHeader.tsx
import { useLeaderboardApi } from "@/src/hooks/useLeaderboardApi";
import { router } from "expo-router";
import { ViewProps, View, Text } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { LastRankPreviewCard } from "../Cards";
import { useTheme } from "@/src/hooks/useTheme";
import ButtonOutlined from "../Button/ButtonOutlined";
import { lastRankEnter, lastRankEnterDelayed } from "./animations";

// --- 2. LeaderboardHeader Component ---
// This component now displays the current user's rank based on the hook data
export const LeaderboardTabHeader = ({
  isTicky = false,
  style,
}: { isTicky?: boolean } & ViewProps) => {
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

        <ButtonOutlined
          label="View more"
          size="small"
          onPress={() => router.push("/leaderboard")}
        />
      </View>

      {lastRank && (
        <Animated.View
          entering={isTicky ? lastRankEnter : lastRankEnterDelayed}
        >
          <LastRankPreviewCard
            // 🎯 THE FIX: Explicitly map 'id' to 'userId'
            userId={lastRank.id}
            // Spread the rest of the properties from the data object
            {...lastRank}
          />
        </Animated.View>
      )}
    </View>
  );
};
