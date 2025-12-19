import { useTheme } from "@/src/hooks/useTheme";
import { ContainerProps } from "@/src/types";
import { View } from "react-native";
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
    <View
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
      <View
        style={[
          {
            backgroundColor: "rgba(51, 53, 58, 0.6)",
            borderRadius: theme.radius.md,
            paddingHorizontal: theme.spacing.md,
            paddingVertical: theme.spacing.xl,
          },
          wrapperStyle,
        ]}
      >
        {children}
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   card: {
//   },
//   wrapper: {
//     // borderRadius: 20,
//   },
// });
