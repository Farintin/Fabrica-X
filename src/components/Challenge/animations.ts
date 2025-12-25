import { Easing, FadeInDown } from "react-native-reanimated";

export const BANNER_ENTER = FadeInDown.duration(320).easing(
  Easing.out(Easing.cubic)
);
