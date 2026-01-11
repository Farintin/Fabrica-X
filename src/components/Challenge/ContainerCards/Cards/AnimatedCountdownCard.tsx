// src/components/Challenge/ContainerCards/Cards/AnimatedCountdownCard.tsx
import { AnimatedChallengeCardWrapper } from "@/components/ui/Cards/ChallengeCards";
import CountdownCard from "./CountdownCard";
import { useHomeAnimation } from "@/screens/Home/HomeAnimationContext";

export default function AnimatedCountdownCard() {
  const { setCountdownDone } = useHomeAnimation();

  return (
    <AnimatedChallengeCardWrapper
      delay={1200}
      finishHanler={() => setCountdownDone(true)}
    >
      <CountdownCard />
    </AnimatedChallengeCardWrapper>
  );
}
