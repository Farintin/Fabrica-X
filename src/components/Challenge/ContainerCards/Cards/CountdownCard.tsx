// src/components/ui/Challenge/ContainerCards.tsx
import Timer from "../Timer";
import { useTheme } from "@/hooks/theme/useTheme";
import Article from "../Article";
import ChallengeCard from "@/components/ui/Cards/ChallengeCards";

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
        style={{
          color: "rgba(255, 255, 255, 0.65)",
          marginVertical: theme.spacing.sm,
        }}
      >
        ENDS IN
      </Article>
      <Timer />
    </ChallengeCard>
  );
}
