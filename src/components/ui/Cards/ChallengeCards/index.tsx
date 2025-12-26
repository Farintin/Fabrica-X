// src/components/ui/Cards/ChallengeCards/index.tsx
import { ContainerProps } from "@/components/layout/Container.types";
import { ThemedView } from "@/components/Themed";
import { useTheme } from "@/hooks/theme/useTheme";
import { useHomeAnimation } from "@/screens/Home/HomeAnimationContext";
import { useEffect } from "react";
import Animated, { FadeInDown, runOnJS } from "react-native-reanimated";

export const AnimatedChallengeCardWrapper = ({
  children,
  delay = 0,
  finishHanler,
}: ContainerProps & { delay?: number; finishHanler?: () => void }) => {
  const { animateOnce } = useHomeAnimation();

  useEffect(() => {
    if (!animateOnce) {
      finishHanler?.();
    }
  }, [animateOnce]);

  return (
    <Animated.View
      style={{ width: "100%" }}
      entering={
        animateOnce
          ? FadeInDown.delay(delay)
              .duration(420)
              .springify()
              .damping(18)
              .withCallback((finished) => {
                "worklet";
                if (finished && finishHanler) {
                  runOnJS(finishHanler)();
                }
              })
          : undefined
      }
    >
      {children}
    </Animated.View>
  );
};

export default function ChallengeCard({
  children,
  style,
  wrapperStyle,
}: ContainerProps) {
  const theme = useTheme();

  return (
    <ThemedView
      style={[
        theme.colors.shadow.card,
        {
          width: "100%",
          backgroundColor: theme.colors.surface,
          borderRadius: theme.radius.md,
        },
        style,
      ]}
    >
      <ThemedView
        style={[
          {
            backgroundColor: "rgba(51, 53, 58, 0.6)",
            borderRadius: theme.radius.md,
            paddingHorizontal: theme.spacing.base,
            paddingVertical: theme.spacing.xxl,
          },
          wrapperStyle,
        ]}
      >
        {children}
      </ThemedView>
    </ThemedView>
  );
}
