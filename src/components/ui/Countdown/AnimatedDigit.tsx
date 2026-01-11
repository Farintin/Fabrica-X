// src/components/ui/Countdown/AnimatedDigit.tsx
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  interpolateColor,
  Easing,
  withDelay,
  withSequence,
} from "react-native-reanimated";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/theme/useTheme";

type Props = {
  fontSize: number;
  value: string;
};

export default function AnimatedDigit({ value, fontSize }: Props) {
  const [display, setDisplay] = useState(value);
  const theme = useTheme();

  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);
  const colorProgress = useSharedValue(0); // 0 → white, 1 → green

  useEffect(() => {
    if (value === display) return;

    // animate old digit out
    translateY.value = withTiming(-12, { duration: 160 });
    opacity.value = withTiming(0, { duration: 160 }, () => {
      runOnJS(setDisplay)(value);

      // reset for new digit
      translateY.value = Math.floor(fontSize / 2.5);
      opacity.value = 0;

      // flash green → linger → ease back to white
      colorProgress.value = withSequence(
        withTiming(1, { duration: 0 }), // snap to green
        withDelay(
          280,
          withTiming(0, {
            duration: 480,
            easing: Easing.out(Easing.exp), // elegant energy decay
          })
        )
      );

      // animate in
      translateY.value = withTiming(0, { duration: 180 });
      opacity.value = withTiming(1, { duration: 180 });
    });

    scale.value = withTiming(1.15, { duration: 90 }, () => {
      scale.value = withTiming(1, {
        duration: 120,
        easing: Easing.out(Easing.back(1.8)),
      });
    });
  }, [value, fontSize]);

  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }, { scale: scale.value }],
    opacity: opacity.value,
    color: interpolateColor(
      colorProgress.value,
      [0, 1],
      [theme.colors.natural.white, theme.colors.primary] // or your green
    ),
  }));

  return (
    <Animated.Text
      style={[
        theme.typography.timerValue,
        {
          fontSize,
          lineHeight: fontSize + Math.floor(fontSize / 6),
        },
        style,
      ]}
    >
      {display}
    </Animated.Text>
  );
}
