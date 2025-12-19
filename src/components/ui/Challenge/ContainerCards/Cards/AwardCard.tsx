import { Text, View } from "react-native";
import SvgIcon from "../../../SvgIcon";
import { useTheme } from "@/src/hooks/useTheme";
import { AnimatedChallengeCard } from "../../../Cards/ChallengeCards";
import Highlight from "../Highlight";
import Article from "../Article";

export default function AwardCard() {
  const theme = useTheme();
  const iconSize = 16;
  const iconColor = theme.colors.primary;

  return (
    <AnimatedChallengeCard delay={250}>
      <Text
        style={{
          ...theme.typography.heading,
          color: theme.colors.textPrimary,
          marginVertical: theme.spacing.sm,
          textAlign: "center",
        }}
      >
        Global Change Award @ Fabrica X
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: theme.spacing.sm,
        }}
      >
        {/* Left side of the header */}
        <Highlight>
          <SvgIcon name="user-octagon" size={iconSize} color={iconColor} />
          <Article text={"Fabrica X \n H&M Foundation"} />
        </Highlight>

        {/* Center of the header (title) */}
        <Highlight
          style={{
            borderColor: "#7C7C7C",
            borderLeftWidth: 1,
            borderRightWidth: 1,
          }}
        >
          <SvgIcon name="location" size={iconSize} color={iconColor} />
          <Article text={"Fabrica X, \n King’s Cross, London"} />
        </Highlight>

        {/* Right side of the header (grid items) */}
        <Highlight>
          <SvgIcon name="duration" size={iconSize} color={iconColor} />
          <Article text={"17 Sep - 01 Oct"} />
        </Highlight>
      </View>
    </AnimatedChallengeCard>
  );
}
