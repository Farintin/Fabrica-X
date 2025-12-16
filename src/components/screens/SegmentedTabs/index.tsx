// src/components/screens/SegmentedTabs/index.tsx
import { View, Pressable, StyleSheet, ViewProps } from "react-native";
import { useTheme } from "@/src/hooks/useTheme";
import SvgIcon from "@/components/ui/SvgIcon";

type TabKey = "leaderboard" | "prizes";

type Props = ViewProps & {
  value: TabKey;
  onChange: (v: TabKey) => void;
};

export default function SegmentedTabs({
  value,
  onChange,
  style,
  ...restProps
}: Props) {
  const theme = useTheme();
  const iconSize = 20;
  const activeTabColor = theme.colors.primary;
  const iconColors = {
    inactiveTab: "rgba(245, 245, 245, .9)",
    activeTab: theme.colors.natural.white,
  };

  return (
    <View
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
      <View
        style={[
          styles.wrapper,
          {
            backgroundColor: "rgba(0,0,0,0.57)",
            borderRadius: theme.radius.pill,
            padding: theme.spacing.xs,
          },
        ]}
      >
        <Pressable
          onPress={() => onChange("prizes")}
          style={[
            styles.tab,
            {
              paddingVertical: theme.spacing.sm,
              borderRadius: theme.radius.pill,
            },
            value === "prizes" && { backgroundColor: activeTabColor },
          ]}
        >
          <SvgIcon
            name="crown"
            size={iconSize}
            color={
              value === "prizes" ? iconColors.activeTab : iconColors.inactiveTab
            }
            style={{ marginVertical: theme.spacing.xs / 2 }}
          />
        </Pressable>

        <Pressable
          onPress={() => onChange("leaderboard")}
          style={[
            styles.tab,
            {
              paddingVertical: theme.spacing.sm,
              borderRadius: theme.radius.pill,
            },
            value === "leaderboard" && { backgroundColor: activeTabColor },
          ]}
        >
          <SvgIcon
            name="ranking"
            size={iconSize}
            color={
              value === "leaderboard"
                ? iconColors.activeTab
                : iconColors.inactiveTab
            }
            style={{ marginVertical: theme.spacing.xs / 2 }}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
