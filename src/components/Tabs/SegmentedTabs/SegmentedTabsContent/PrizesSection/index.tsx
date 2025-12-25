// import { View } from "react-native";
import { useTheme } from "@/hooks/theme/useTheme";
import Animated from "react-native-reanimated";
import {
  COLLECTIBLE_CONTENT_ENTER,
  PRIZE_CONTENT_ENTER,
} from "../../animations";
import { ThemedView } from "@/components/Themed";
import Collectables from "@/components/Prizes/Collectables";
import Prizes from "@/components/Prizes/Prizes";

export default function PrizesSection() {
  const theme = useTheme();

  return (
    <ThemedView
      style={{
        paddingVertical: theme.spacing.md,
        gap: theme.spacing.xl,
      }}
    >
      <Animated.View entering={PRIZE_CONTENT_ENTER}>
        <Prizes />
        {/* <Collectables /> */}
      </Animated.View>
      <Animated.View entering={COLLECTIBLE_CONTENT_ENTER}>
        {/* <Prizes /> */}
        <Collectables />
      </Animated.View>
    </ThemedView>
  );
}
