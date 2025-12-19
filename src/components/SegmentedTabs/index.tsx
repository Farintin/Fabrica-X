// src/components/SegmentedTabs/index.tsx
import { View, ViewProps } from "react-native";
import SegmentedTabsContent from "./SegmentedTabsContent";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import Animated, {
  FadeInRight,
  FadeInLeft,
  FadeInUp,
} from "react-native-reanimated";
import SegmentedTabsNav from "./SegmentedTabsNav";
import { SegmentedTabsProps } from "@/src/types/tabs";
import { useTheme } from "@/src/hooks/useTheme";

export default function SegmentedTabs({
  value,
  setHandler,
  ...restProps
}: SegmentedTabsProps & ViewProps) {
  const theme = useTheme();
  const { bottom } = useSafeAreaInsets();
  const [navAnimated, setNavAnimated] = useState(false);

  const NAV_ANIM_DELAY = 1500;
  const NAV_ANIM_DURATION = 500;

  useEffect(() => {
    const t = setTimeout(() => {
      setNavAnimated(true);
    }, NAV_ANIM_DELAY + NAV_ANIM_DURATION);

    return () => clearTimeout(t);
  }, []);

  return (
    <View
      style={{
        backgroundColor: theme.colors.background.black,
        paddingTop: theme.spacing.md,
        paddingBottom: bottom,
        gap: theme.spacing.sm,
      }}
      {...restProps}
    >
      <Animated.View
        key="tabs-nav"
        entering={FadeInUp.delay(NAV_ANIM_DELAY).duration(NAV_ANIM_DURATION)}
      >
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
              ? FadeInLeft.duration(500)
              : FadeInRight.duration(500)
          }
          style={{ paddingHorizontal: theme.spacing.md }}
        >
          <SegmentedTabsContent activeTab={value} />
        </Animated.View>
      )}
    </View>
  );
}
