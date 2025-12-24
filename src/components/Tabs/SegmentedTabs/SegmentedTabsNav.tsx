// src/components/SegmentedTabs/SegmentedTabsNav/index.tsx
import { useEffect } from "react";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "@/hooks/theme/useTheme";
import { ThemedViewProps, ThemedView } from "@/components/Themed";
import {
  ActiveTabIndicator,
  TabButton,
} from "@/components/ui/Button/SegmentedTabButton";
import { SegmentedTabsNavProps } from "../SegmentedTabs.types";
export default function SegmentedTabsNav({
  isSticky,
  value,
  onChange,
  style,
  ...restProps
}: SegmentedTabsNavProps & ThemedViewProps & { isSticky?: boolean }) {
  const theme = useTheme();

  const hasLayout = useSharedValue(false);
  const activeIndex = useSharedValue(value === "prizes" ? 0 : 1);
  const containerWidth = useSharedValue(0);
  const wrapperPadding = theme.spacing.xs;

  useEffect(() => {
    activeIndex.value = withTiming(value === "prizes" ? 0 : 1, {
      duration: 220,
    });
  }, [value]);

  const indicatorStyle = useAnimatedStyle(() => {
    if (!hasLayout.value || containerWidth.value === 0) {
      return { opacity: 0 };
    }

    const tabWidth = containerWidth.value / 2;
    const width = tabWidth - wrapperPadding * 2;

    return {
      opacity: withTiming(1, { duration: 220 }),
      width,
      transform: [
        {
          translateX: activeIndex.value * tabWidth + wrapperPadding,
        },
      ],
    };
  });

  return (
    <ThemedView
      style={[
        theme.colors.shadow.segmentedTabs,
        {
          backgroundColor: theme.colors.surface,
          borderRadius: theme.radius.pill,
        },
        style,
      ]}
      {...restProps}
    >
      <ThemedView
        onLayout={(e) => {
          containerWidth.value = e.nativeEvent.layout.width;
          hasLayout.value = true;
        }}
        style={{
          flexDirection: "row",
          backgroundColor: "rgba(0,0,0,0.57)",
          borderRadius: theme.radius.pill,
          padding: wrapperPadding,
        }}
      >
        {/* Active indicator */}
        {<ActiveTabIndicator style={indicatorStyle} />}

        <TabButton
          iconName="crown"
          tab="prizes"
          onChange={onChange}
          activeTab={value}
        />

        <TabButton
          iconName="ranking"
          tab="leaderboard"
          onChange={onChange}
          activeTab={value}
        />
      </ThemedView>
    </ThemedView>
  );
}
