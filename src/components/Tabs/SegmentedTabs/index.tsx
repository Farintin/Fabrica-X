// src/components/Tabs/SegmentedTabs/index.tsx
import SegmentedTabsContent from "./SegmentedTabsContent";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import Animated from "react-native-reanimated";
import SegmentedTabsNav from "./SegmentedTabsNav";
import { useTheme } from "@/hooks/theme/useTheme";
import { ThemedViewProps, ThemedView } from "@/components/Themed";
import { SegmentedTabsProps } from "../SegmentedTabs.types";
import {
  NAV_ANIM_DELAY,
  ANIM_DURATION,
  SEGMENTED_NAV_ENTER,
  SEGMENTED_CONTENT_LEFT,
  SEGMENTED_CONTENT_RIGHT,
} from "./animations";

export default function SegmentedTabs({
  value,
  setHandler,
  style,
  ...restProps
}: SegmentedTabsProps & ThemedViewProps) {
  const theme = useTheme();
  const { bottom } = useSafeAreaInsets();
  const [navAnimated, setNavAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setNavAnimated(true);
    }, NAV_ANIM_DELAY + ANIM_DURATION);

    return () => clearTimeout(t);
  }, []);

  return (
    <ThemedView
      style={[
        {
          backgroundColor: theme.colors.background.black,
          paddingTop: theme.spacing.base,
          paddingBottom: bottom,
          gap: theme.spacing.sm,
          flex: 1,
        },
        style,
      ]}
      {...restProps}
    >
      <Animated.View key="tabs-nav" entering={SEGMENTED_NAV_ENTER}>
        <SegmentedTabsNav
          value={value}
          onChange={setHandler}
          style={{ marginHorizontal: theme.spacing.base }}
        />
      </Animated.View>

      {navAnimated && (
        <Animated.View
          key={value}
          entering={
            value === "leaderboard"
              ? SEGMENTED_CONTENT_LEFT
              : SEGMENTED_CONTENT_RIGHT
          }
          style={{
            paddingHorizontal: theme.spacing.base,
          }}
        >
          <SegmentedTabsContent activeTab={value} />
        </Animated.View>
      )}
    </ThemedView>
  );
}
