// src/components/SegmentedTabs/animations.ts
import { FadeInLeft, FadeInRight, FadeInUp } from "react-native-reanimated";

export const ANIM_DURATION = 600;
export const NAV_ANIM_DELAY = 1500;

export const SEGMENTED_NAV_ENTER =
  FadeInUp.delay(NAV_ANIM_DELAY).duration(ANIM_DURATION);

export const SEGMENTED_CONTENT_LEFT = FadeInLeft.duration(ANIM_DURATION);

export const SEGMENTED_CONTENT_RIGHT = FadeInRight.duration(ANIM_DURATION);

export const PRIZE_CONTENT_ENTER = FadeInRight.springify()
  .damping(8)
  .stiffness(60);
