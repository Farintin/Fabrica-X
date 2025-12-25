import { AnimatedChallengeCardWrapper } from "@/components/ui/Cards/ChallengeCards";
import AwardCard from "./AwardCard";

export default function AnimatedAwardCard() {
  return (
    <AnimatedChallengeCardWrapper delay={420}>
      <AwardCard />
    </AnimatedChallengeCardWrapper>
  );
}
