import Animated, { FadeInDown, runOnJS } from "react-native-reanimated";
import GroupButtonCard from "./GroupButtonCard";
import { useChallengeAnimation } from "@/components/Challenge/ChallengeAnimationContext";

export default function AnimatedGroupButtonCard() {
  const { notifyGroupButtonEntered } = useChallengeAnimation();

  return (
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
  );
}
