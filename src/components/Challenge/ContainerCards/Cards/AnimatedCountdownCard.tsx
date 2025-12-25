// src/components/ui/Challenge/ContainerCards.tsx
import { AnimatedChallengeCardWrapper } from "@/components/ui/Cards/ChallengeCards";
import ContainerCards from "..";
import CountdownCard from "./CountdownCard";

export default function AnimatedCountdownCard() {
  return (
    <AnimatedChallengeCardWrapper delay={1200}>
      <CountdownCard />
    </AnimatedChallengeCardWrapper>
  );
}
