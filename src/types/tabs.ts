export type TabsKey = "leaderboard" | "prizes";

export type SegmentedTabsProps = {
  value: TabsKey;
  setHandler: (v: TabsKey) => void;
};

export type SegmentedTabsNavProps = {
  value: TabsKey;
  onChange: (v: TabsKey) => void;
};
