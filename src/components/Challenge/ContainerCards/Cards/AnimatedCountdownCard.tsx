// src/components/Challenge/ContainerCards/Cards/AnimatedCountdownCard.tsx
import { AnimatedChallengeCardWrapper } from "@/components/ui/Cards/ChallengeCards";
import CountdownCard from "./CountdownCard";

export default function AnimatedCountdownCard({
  onEntered,
}: {
  onEntered?: () => void;
}) {
  return (
    <AnimatedChallengeCardWrapper delay={1200} finishHanler={onEntered}>
      <CountdownCard />
    </AnimatedChallengeCardWrapper>
  );
}
