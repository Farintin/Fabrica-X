// src/components/screens/SegmentedTabs/SegmentedTabsContent/index.tsx
import { TabsKey } from "@/src/types/tabs";
import LeaderboardSection from "./LeaderboardSection";
import PrizesSection from "./PrizesSection";

export default function SegmentedTabsContent({
  activeTab,
}: {
  activeTab: TabsKey;
}) {
  return (
    <>
      {activeTab === "leaderboard" && <LeaderboardSection />}
      {activeTab === "prizes" && <PrizesSection />}
    </>
  );
}
