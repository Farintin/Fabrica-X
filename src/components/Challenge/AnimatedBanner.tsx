// src/components/Challenge/AnimatedBanner.tsx
import Animated, { runOnJS } from "react-native-reanimated";
import { BANNER_ENTER } from "./animations";
import { useTheme } from "@/hooks/theme/useTheme";
import Banner from "./Banner";
import { useHomeAnimation } from "@/screens/Home/HomeAnimationContext";

export default function AnimatedBanner({
  onEntered,
}: {
  onEntered?: () => void;
}) {
  const theme = useTheme();
  const { animateOnce, markAnimated } = useHomeAnimation();

  const bannerElem = <Banner style={{ marginBottom: theme.spacing.sm }} />;

  if (!animateOnce) {
    onEntered && runOnJS(onEntered)();
    return bannerElem;
  }

  return (
    <Animated.View
      entering={BANNER_ENTER.withCallback((finished) => {
        "worklet";
        if (finished) {
          runOnJS(markAnimated)(); // lock animation forever
          if (onEntered) {
            runOnJS(onEntered)(); // ✅ GUARANTEED to fire
          }
        }
      })}
    >
      {bannerElem}
    </Animated.View>
  );
}
