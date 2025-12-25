import { useTheme } from "@/hooks/theme/useTheme";
import Highlight from "../Highlight";
import Article from "../Article";
import { Heading } from "@/components/typography/Heading";
import { ThemedView } from "@/components/Themed";
import ChallengeCard from "@/components/ui/Cards/ChallengeCards";
import SvgIcon from "@/components/ui/SvgIcon";

export default function AwardCard() {
  const theme = useTheme();
  const iconSize = 16;
  const iconColor = theme.colors.primary;

  return (
    <ChallengeCard>
      <Heading align="center" spaced>
        Global Change Award @ Fabrica X
      </Heading>
      <ThemedView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: theme.spacing.xs,
        }}
      >
        {/* Left side of the header */}
        <Highlight>
          <SvgIcon name="user-octagon" size={iconSize} color={iconColor} />
          <Article>Fabrica X {"\n"} H&M Foundation</Article>
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
          <Article>Fabrica X, {"\n"} King’s Cross, London</Article>
        </Highlight>

        {/* Right side of the header (grid items) */}
        <Highlight>
          <SvgIcon name="duration" size={iconSize} color={iconColor} />
          <Article>17 Sep - 01 Oct</Article>
        </Highlight>
      </ThemedView>
    </ChallengeCard>
  );
}
