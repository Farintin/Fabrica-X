// src/components/ui/Challenge/ContainerCards.tsx
import { useTheme } from "@/hooks/theme/useTheme";
import Article from "../Article";
import ChallengeCard from "@/components/ui/Cards/ChallengeCards";
import Countdown from "@/components/ui/Countdown";
import { useHomeAnimation } from "@/screens/Home/HomeAnimationContext";

export default function CountdownCard() {
  const theme = useTheme();
  const { countdownDone } = useHomeAnimation();

  return (
    <ChallengeCard
      wrapperStyle={{
        paddingVertical: theme.spacing.base,
        backgroundColor: "rgba(0, 0, 0, .35)",
      }}
    >
      <Article
        style={[
          theme.typography.bodySmall,
          {
            color: "rgba(255, 255, 255, 0.65)",
            marginVertical: theme.spacing.sm,
          },
        ]}
      >
        ENDS IN
      </Article>
      <Countdown start={countdownDone} />
    </ChallengeCard>
  );
}
