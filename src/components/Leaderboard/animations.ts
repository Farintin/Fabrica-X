// src/components/ui/Leaderboard/animations.ts
import { FadeInDown } from "react-native-reanimated";

export const lastRankEnter = FadeInDown.duration(300);

export const lastRankEnterDelayed = FadeInDown.delay(300).duration(500);
