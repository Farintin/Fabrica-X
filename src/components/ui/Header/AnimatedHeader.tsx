import { ViewProps } from "react-native";
import Animated from "react-native-reanimated";
import { HOME_HEADER_ENTER } from "@/libs/animations";

export default function AnimatedHeader(props: ViewProps) {
  return <Animated.View entering={HOME_HEADER_ENTER} {...props} />;
}
