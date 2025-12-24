import { Alert } from "react-native";
import { useTheme } from "@/hooks/theme/useTheme";
import { ThemedView } from "@/components/Themed";
import { ContainerProps } from "@/components/layout/Container.types";
import { ChallengeWhiteButton } from "@/components/ui/Button";
import ChallengeCard from "@/components/ui/Cards/ChallengeCards";

export default function GroupButtonCard({
  style,
  wrapperStyle,
}: ContainerProps) {
  const theme = useTheme();

  return (
    <ChallengeCard
      style={[theme.colors.shadow.groupButtonCard, style]}
      wrapperStyle={[
        {
          paddingHorizontal: theme.spacing.sm,
          paddingVertical: theme.spacing.sm,
        },
        wrapperStyle,
      ]}
    >
      <ThemedView
        style={[
          {
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "space-between",
          },
          { gap: theme.spacing.sm },
        ]}
      >
        <ChallengeWhiteButton
          iconName="leaderboard"
          label="leaderboard"
          onPress={() => Alert.alert("Leaderboard")}
        />

        <ChallengeWhiteButton
          iconName="voucher"
          onPress={() => Alert.alert("Voucher")}
        />

        <ChallengeWhiteButton
          iconName="gift"
          onPress={() => Alert.alert("Gift")}
        />
      </ThemedView>
    </ChallengeCard>
  );
}
