import { useAnimatedStyle, withTiming } from "react-native-reanimated";

export function useStickyTabsNavAnimation(isSticky: boolean) {
  return useAnimatedStyle(() => ({
    opacity: withTiming(isSticky ? 1 : 0, { duration: 500 }),
    transform: [
      { translateY: withTiming(isSticky ? 0 : 8, { duration: 500 }) },
      { scale: withTiming(isSticky ? 1 : 0.96, { duration: 500 }) },
    ],
  }));
}
