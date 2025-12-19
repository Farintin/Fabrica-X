// src/components/ui/Leaderboard/LeaderboardList.tsx
import { LeaderboardUser } from "@/src/libs/api/leaderboardApi";
import {
  ScrollViewProps,
  FlatList,
  ActivityIndicator,
  View,
} from "react-native";
import Animated, { FadeInLeft } from "react-native-reanimated";
import { RankCard } from "../Cards";
import { useTheme } from "@/src/hooks/useTheme";
import UserRankCard from "../Cards/UserRankCard";
import UserData from "@/data/user.json";
import { useRef } from "react";

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
  const animDelayRef = useRef(0);
  const theme = useTheme();
  const ANIMATE_LIMIT = 10;
  const ANIMATE_TIME = 300;

  return (
    <>
      {scrollEnabled ? (
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item, index }) => {
            let delay = 200;
            if (animDelayRef.current >= delay * ANIMATE_LIMIT) {
              animDelayRef.current = 0;
            }
            if (animDelayRef.current < delay * ANIMATE_LIMIT) {
              animDelayRef.current += delay;
            }

            return (
              <Animated.View
                key={String(item.id)}
                entering={FadeInLeft.delay(animDelayRef.current).duration(
                  ANIMATE_TIME
                )}
              >
                {String(UserData.id) === String(item.id) && index >= 3 ? (
                  <UserRankCard userId={item.id} {...item} />
                ) : (
                  <RankCard userId={item.id} {...item} />
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
        <View>
          {/* CORRECTED MAP SYNTAX */}
          {data.map((item, i) => (
            <Animated.View
              key={String(item.id)}
              entering={FadeInLeft.delay(200 * i + 1).duration(ANIMATE_TIME)}
            >
              <RankCard userId={item.id} {...item} />
            </Animated.View>
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
