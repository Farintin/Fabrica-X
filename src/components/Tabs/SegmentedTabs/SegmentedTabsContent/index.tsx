// src/components/Tabs/SegmentedTabs/SegmentedTabsContent/index.tsx
import { TabsKey } from "@/types/navigation";
import LeaderboardSection from "./LeaderboardSection";
import PrizesSection from "./PrizesSection";
import { ThemedView, ThemedViewProps } from "@/components/Themed";

export type SegmentedTabsContentProps = ThemedViewProps & {
  activeTab: TabsKey;
};

export default function SegmentedTabsContent({
  activeTab,
  style,
}: SegmentedTabsContentProps) {
  return (
    <ThemedView style={[style]}>
      {activeTab === "leaderboard" && <LeaderboardSection />}
      {activeTab === "prizes" && <PrizesSection />}
    </ThemedView>
  );
}
