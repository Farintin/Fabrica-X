import Animated, { FadeInUp } from "react-native-reanimated";
import LeaderboardControls, {
  LeaderboardControlsProps,
} from "./LeaderboardControls";

export default function AnimatedLeaderboardControls(
  props: LeaderboardControlsProps
) {
  return (
    <Animated.View entering={FadeInUp.delay(80).duration(420)}>
      <LeaderboardControls {...props} />
    </Animated.View>
  );
}
