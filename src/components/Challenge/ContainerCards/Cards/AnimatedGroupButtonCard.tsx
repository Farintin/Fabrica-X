// src/components/Challenge/ContainerCards/Cards/AnimatedGroupButtonCard.tsx
import Animated, { FadeInDown, runOnJS } from "react-native-reanimated";
import GroupButtonCard from "./GroupButtonCard";
import { useChallengeAnimation } from "@/components/Challenge/ChallengeAnimationContext";
import { useHomeAnimation } from "@/screens/Home/HomeAnimationContext";

export default function AnimatedGroupButtonCard() {
  const { notifyGroupButtonEntered } = useChallengeAnimation();
  const { animateOnce } = useHomeAnimation();

  const groupButtonCardElem = (
    <GroupButtonCard
      style={{
        width: "auto",
        marginVertical: -22,
        zIndex: 1,
      }}
      wrapperStyle={{
        backgroundColor: "rgba(0, 0, 0, .35)",
      }}
    />
  );
  if (!animateOnce) {
    notifyGroupButtonEntered && runOnJS(notifyGroupButtonEntered)();
    return groupButtonCardElem;
  }

  return (
    <Animated.View
      entering={
        animateOnce
          ? FadeInDown.delay(1500)
              .duration(800)
              .springify()
              .damping(18)
              .withCallback((finished) => {
                if (finished && notifyGroupButtonEntered) {
                  runOnJS(notifyGroupButtonEntered)();
                }
              })
          : undefined
      }
      style={{
        zIndex: 1,
      }}
    >
      {groupButtonCardElem}
    </Animated.View>
  );
}
