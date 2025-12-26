import { ThemedViewProps } from "@/components/Themed";
import AnimatedHeader from "./AnimatedHeader";
import LeaderboardHeader from "./LeaderboardHeader";

export default function AnimatedLeaderboardHeader(props: ThemedViewProps) {
  return (
    <AnimatedHeader>
      <LeaderboardHeader {...props} />
    </AnimatedHeader>
  );
}
