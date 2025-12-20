// src/components/ui/Challenge/ContainerCards.tsx
import Timer from "../Timer";
import { useTheme } from "@/src/hooks/useTheme";
import { AnimatedChallengeCard } from "../../../Cards/ChallengeCards";
import { ContainerProps } from "@/src/types";
import Article from "../Article";

export default function CountdownCard({
  wrapperStyle,
  ...restProps
}: ContainerProps) {
  const theme = useTheme();

  return (
    <AnimatedChallengeCard
      delay={500}
      wrapperStyle={{
        paddingVertical: theme.spacing.base,
        backgroundColor: "rgba(0, 0, 0, .35)",
      }}
      {...restProps}
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
    </AnimatedChallengeCard>
  );
}
