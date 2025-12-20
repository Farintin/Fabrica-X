// src/components/SegmentedTabs/index.tsx
import { View, ViewProps } from "react-native";
import SegmentedTabsContent from "./SegmentedTabsContent";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import Animated from "react-native-reanimated";
import SegmentedTabsNav from "./SegmentedTabsNav";
import { SegmentedTabsProps } from "@/src/types/tabs";
import { useTheme } from "@/src/hooks/useTheme";
import {
  ANIM_DURATION,
  NAV_ANIM_DELAY,
  SEGMENTED_CONTENT_LEFT,
  SEGMENTED_CONTENT_RIGHT,
  SEGMENTED_NAV_ENTER,
} from "./animations";

export default function SegmentedTabs({
  value,
  setHandler,
  style,
  ...restProps
}: SegmentedTabsProps & ViewProps) {
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
    <View
      style={[
        {
          backgroundColor: theme.colors.background.black,
          paddingTop: theme.spacing.md,
          paddingBottom: bottom,
          gap: theme.spacing.sm,
        },
        style,
      ]}
      {...restProps}
    >
      <Animated.View key="tabs-nav" entering={SEGMENTED_NAV_ENTER}>
        <SegmentedTabsNav
          value={value}
          onChange={setHandler}
          style={{ marginHorizontal: theme.spacing.md }}
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
            paddingHorizontal: theme.spacing.md,
          }}
        >
          <SegmentedTabsContent activeTab={value} />
        </Animated.View>
      )}
    </View>
  );
}
