import { useEffect } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export function useStickyTabsNavAnimation(isSticky: boolean) {
  const stickyOpacity = useSharedValue(0);

  useEffect(() => {
    stickyOpacity.value = withTiming(isSticky ? 1 : 0, { duration: 250 });
  }, [isSticky]);

  return useAnimatedStyle(() => ({
    opacity: stickyOpacity.value,
    transform: [{ translateY: stickyOpacity.value * -10 }],
  }));
}
