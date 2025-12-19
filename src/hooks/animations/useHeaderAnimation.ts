import { useAnimatedStyle, withTiming } from "react-native-reanimated";

export function useHeaderAnimation(isSticky: boolean) {
  return useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(isSticky ? 0 : -12, {
          duration: 180,
        }),
      },
    ],
  }));
}
