import { ContainerProps } from "@/types";
import { View, Alert } from "react-native";
import ChallengeCard from "../../../Cards/ChallengeCards";
import { useTheme } from "@/hooks/useTheme";
import { ChallengeWhiteButton } from "../../../Button";

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
      <View
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
      </View>
    </ChallengeCard>
  );
}
