import { View } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import Animated from "react-native-reanimated";
import { PRIZE_CONTENT_ENTER } from "../../animations";
import Prizes from "@/components/ui/Prizes/Prizes";
import Collectables from "@/components/ui/Prizes/Collectables";

export default function PrizesSection() {
  const theme = useTheme();

  return (
    <View>
      <Animated.View
        entering={PRIZE_CONTENT_ENTER}
        style={{
          paddingVertical: theme.spacing.md,
          gap: theme.spacing.xl,
        }}
      >
        <Prizes />
        <Collectables />
      </Animated.View>
    </View>
  );
}
