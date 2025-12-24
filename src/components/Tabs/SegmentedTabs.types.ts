import { TabsKey } from "@/types/navigation";

export type SegmentedTabsProps = {
  value: TabsKey;
  setHandler: (v: TabsKey) => void;
};

export type SegmentedTabsNavProps = {
  value: TabsKey;
  onChange: (v: TabsKey) => void;
};
