import { ContainerProps } from "@/src/types";
import { View, Alert } from "react-native";
import ButtonWhite from "../../../Button/ButtonWhite";
import ChallengeCard from "../../../Cards/ChallengeCards";
import { useTheme } from "@/src/hooks/useTheme";

export default function GroupButtonCard({
  style,
  wrapperStyle,
}: ContainerProps) {
  const iconSize = 14;
  const theme = useTheme();

  return (
    <ChallengeCard
      style={[
        theme.colors.shadow.groupButtonCard,
        {
          borderRadius: theme.radius.pill,
          paddingHorizontal: 0,
          paddingVertical: 0,
          width: "auto",
        },
        style,
      ]}
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
          { gap: theme.spacing.sm + 4 },
        ]}
      >
        <ButtonWhite
          iconName="leaderboard"
          label="leaderboard"
          iconSize={iconSize}
          onPress={() => Alert.alert("Leaderboard")}
        />

        <ButtonWhite
          iconName="voucher"
          iconSize={iconSize + 1}
          onPress={() => Alert.alert("Voucher")}
        />

        <ButtonWhite
          iconName="gift"
          iconSize={iconSize + 1}
          onPress={() => Alert.alert("Gift")}
        />
      </View>
    </ChallengeCard>
  );
}
