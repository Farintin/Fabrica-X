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
  const ANIMATE_TIME = 300;

  return (
    <>
      {scrollEnabled ? (
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item, index }) => (
            <Animated.View
              key={String(item.id)}
              entering={FadeInLeft.delay(200 * index).duration(ANIMATE_TIME)}
            >
              <RankCard userId={item.id} {...item} />
            </Animated.View>
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
          {data.map((item, i) => (
            <Animated.View
              key={String(item.id)}
              entering={FadeInLeft.delay(200 * i).duration(ANIMATE_TIME)}
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
