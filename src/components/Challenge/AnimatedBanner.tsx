// src/components/Challenge/AnimatedBanner.tsx
import Animated, { runOnJS } from "react-native-reanimated";
import { BANNER_ENTER } from "./animations";
import { ThemedViewProps } from "../Themed";
import { useTheme } from "@/hooks/theme/useTheme";
import Banner from "./Banner";

export default function AnimatedBanner({
  onEntered,
}: ThemedViewProps & { onEntered?: () => void }) {
  const theme = useTheme();

  return (
    <Animated.View
      entering={BANNER_ENTER.withCallback((finished) => {
        "worklet";
        if (finished && onEntered) {
          runOnJS(onEntered)();
        }
      })}
    >
      <Banner style={{ marginBottom: theme.spacing.sm }} />
    </Animated.View>
  );
}
