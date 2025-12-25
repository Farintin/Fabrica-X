// src/components/Challenge/ContainerCards.tsx
import { useTheme } from "@/hooks/theme/useTheme";
import Animated, { FadeInDown } from "react-native-reanimated";
import GroupButtonCard from "./Cards/GroupButtonCard";
import AwardCard from "./Cards/AwardCard";
import CountdownCard from "./Cards/CountdownCard";
import { ThemedView } from "@/components/Themed";
import { ThemedViewProps } from "@/components/Themed/ThemedView";
import { useChallengeAnimation } from "../ChallengeAnimationContext";
import { runOnJS } from "react-native-reanimated";

export default function ContainerCards({ style }: ThemedViewProps) {
  const theme = useTheme();
  const { notifyGroupButtonEntered } = useChallengeAnimation();

  return (
    <ThemedView
      style={[
        {
          alignItems: "center",
          paddingHorizontal: theme.spacing.base,
          gap: theme.spacing.sm,
        },
        style,
      ]}
    >
      <AwardCard />

      <Animated.View
        entering={FadeInDown.delay(1500)
          .duration(800)
          .springify()
          .damping(18)
          .withCallback((finished) => {
            if (finished && notifyGroupButtonEntered) {
              runOnJS(notifyGroupButtonEntered)();
            }
          })}
        style={{
          marginVertical: -22,
          zIndex: 1,
        }}
      >
        <GroupButtonCard
          wrapperStyle={{
            backgroundColor: "rgba(0, 0, 0, .35)",
          }}
        />
      </Animated.View>

      <CountdownCard />
    </ThemedView>
  );
}
