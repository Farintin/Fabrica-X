// src/components/ui/Leaderboard/LeaderboardList.tsx
import { ScrollViewProps, FlatList, ActivityIndicator } from "react-native";
import Animated, { FadeInLeft } from "react-native-reanimated";
import { useTheme } from "@/hooks/theme/useTheme";
import { useRef } from "react";
import { ThemedView } from "@/components/Themed";
import { LeaderboardRow } from "@/types/leaderboard";
import { HighlightRankCard, RankCard } from "../ui/Cards";

// --- 1. LeaderboardList Component ---
const CURRENT_USER_ID = "user-005";
// This component now receives props from the hook
export default function LeaderboardList({
  data,
  isLoading,
  isFetchingNextPage = false,
  loadNextPage,
  scrollEnabled = true,
  ...restProps
}: {
  data: LeaderboardRow[];
  isLoading: boolean;
  isFetchingNextPage?: boolean;
  loadNextPage: () => void;
  scrollEnabled?: boolean;
} & ScrollViewProps) {
  const animDelayRef = useRef(0);
  const theme = useTheme();
  const ANIMATE_LIMIT = 10;
  const ANIMATE_TIME = 300;

  return (
    <>
      {scrollEnabled ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.userId}
          renderItem={({ item, index }) => {
            const { userId, rank } = item;
            let delay = 200;
            if (animDelayRef.current >= delay * ANIMATE_LIMIT) {
              animDelayRef.current = 0;
            }
            if (animDelayRef.current < delay * ANIMATE_LIMIT) {
              animDelayRef.current += delay;
            }

            return (
              <Animated.View
                key={`${userId}-${rank}-${index}`}
                entering={FadeInLeft.delay(animDelayRef.current).duration(
                  ANIMATE_TIME
                )}
              >
                {CURRENT_USER_ID === userId && rank >= 3 ? (
                  <HighlightRankCard {...item} />
                ) : (
                  <RankCard {...item} />
                )}
              </Animated.View>
            );
          }}
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
        <ThemedView>
          {/* CORRECTED MAP SYNTAX */}
          {data.map((item, i) => (
            <Animated.View
              key={String(item.userId)}
              entering={FadeInLeft.delay(200 * i + 1).duration(ANIMATE_TIME)}
            >
              <RankCard {...item} />
            </Animated.View>
          ))}
          {/* List Footer for non-scrollable list (if needed) */}
          {isFetchingNextPage ? (
            <ActivityIndicator
              color={theme.colors.primary}
              style={{ paddingVertical: theme.spacing.lg }}
            />
          ) : null}
        </ThemedView>
      )}
    </>
  );
}
