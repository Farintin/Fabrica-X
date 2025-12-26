// src/components/Challenge/ContainerCards/Cards/AnimatedGroupButtonCard.tsx
import Animated, { FadeInDown, runOnJS } from "react-native-reanimated";
import GroupButtonCard from "./GroupButtonCard";
import { useChallengeAnimation } from "@/components/Challenge/ChallengeAnimationContext";

export default function AnimatedGroupButtonCard() {
  const { notifyGroupButtonEntered } = useChallengeAnimation();

  const groupButtonCardElem = (
    <GroupButtonCard
      wrapperStyle={{
        backgroundColor: "rgba(0, 0, 0, .35)",
      }}
    />
  );

  return (
    <Animated.View
      entering={FadeInDown.duration(420)
        .springify()
        .damping(18)
        .withCallback((finished) => {
          if (finished && notifyGroupButtonEntered) {
            runOnJS(notifyGroupButtonEntered)();
          }
        })}
      style={{
        width: "auto",
        zIndex: 1,
        marginVertical: -22,
      }}
    >
      {groupButtonCardElem}
    </Animated.View>
  );
}
