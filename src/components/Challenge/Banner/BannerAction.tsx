// src/components/Challenge/Banner/BannerAction.tsx
import { Pressable } from "react-native";
import Animated, {
  FadeInUp,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export function BannerAction({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const pressScale = useSharedValue(1);

  const pressStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pressScale.value }],
  }));

  return (
    <Animated.View
      entering={FadeInUp.delay(delay).duration(420).springify().damping(18)}
      style={pressStyle}
    >
      <Pressable
        onPressIn={() => (pressScale.value = withSpring(0.96))}
        onPressOut={() => (pressScale.value = withSpring(1))}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
}
