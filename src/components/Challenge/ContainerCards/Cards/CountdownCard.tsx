// src/components/ui/Challenge/ContainerCards.tsx
import { useTheme } from "@/hooks/theme/useTheme";
import Article from "../Article";
import ChallengeCard from "@/components/ui/Cards/ChallengeCards";
import Countdown from "@/components/ui/Countdown";

export default function CountdownCard() {
  const theme = useTheme();

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
      <Countdown endTime={Date.now() + 1000 * 60 * 60 * 24 * 4} />
    </ChallengeCard>
  );
}
