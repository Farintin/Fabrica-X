// src/components/Challenge/ContainerCards/Cards/AnimatedCountdownCard.tsx
import { AnimatedChallengeCardWrapper } from "@/components/ui/Cards/ChallengeCards";
import CountdownCard from "./CountdownCard";

export default function AnimatedCountdownCard() {
  return (
    <AnimatedChallengeCardWrapper delay={1200}>
      <CountdownCard />
    </AnimatedChallengeCardWrapper>
  );
}
