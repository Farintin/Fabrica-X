import { useAnimatedStyle, withTiming } from "react-native-reanimated";

export function useStickyLeaderboardHeaderAnimation(isSticky: boolean) {
  const duration = 300;
  return useAnimatedStyle(() => ({
    opacity: withTiming(isSticky ? 1 : 0, { duration }),
    transform: [
      { translateY: withTiming(isSticky ? 0 : -8, { duration }) },
      { scale: withTiming(isSticky ? 1 : 0.96, { duration }) },
    ],
  }));
}
