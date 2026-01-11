import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
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

  useEffect(() => {
    if (value === display) return;

    translateY.value = withTiming(-12, { duration: 160 });
    opacity.value = withTiming(0, { duration: 160 }, () => {
      runOnJS(setDisplay)(value);

      translateY.value = Math.floor(fontSize / 4);
      opacity.value = 0;

      translateY.value = withTiming(0, { duration: 180 });
      opacity.value = withTiming(1, { duration: 180 });
    });

    scale.value = withTiming(1.15, { duration: 90 }, () => {
      scale.value = withTiming(1, { duration: 120 });
    });
  }, [value]);

  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }, { scale: scale.value }],
    opacity: opacity.value,
  }));

  return (
    <Animated.Text
      style={[
        theme.typography.timerValue,
        {
          color: theme.colors.natural.white,
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
