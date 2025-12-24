import { ThemedView } from "@/components/Themed";
import { useTheme } from "@/hooks/theme/useTheme";
import { ContainerProps } from "@/types";
import Animated, { FadeInDown } from "react-native-reanimated";

export const AnimatedChallengeCard = ({
  children,
  delay = 0,
  ...restProps
}: ContainerProps & { delay?: number }) => (
  <Animated.View
    style={{ width: "100%" }}
    entering={FadeInDown.delay(delay).duration(800).springify().damping(18)}
  >
    <ChallengeCard {...restProps}>{children}</ChallengeCard>
  </Animated.View>
);

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
