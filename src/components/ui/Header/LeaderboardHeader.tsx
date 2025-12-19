// import { useRouter } from "expo-router";
import { View, Text, StyleSheet, ViewProps } from "react-native";
import IconButton from "../Button/IconButton";
import { useTheme } from "@/src/hooks/useTheme";

export default function LeaderboardHeader({
  title = "Leaderboard",
  hideNotice = false,
  style,
  ...restProps
}: { title?: string; hideNotice?: boolean } & ViewProps) {
  const theme = useTheme();
  const color = theme.colors.textPrimary;

  return (
    <View
      style={[
        styles.root,
        {
          padding: theme.spacing.sm,
        },
        style,
      ]}
      {...restProps}
    >
      {/* Left side of the header */}
      <View style={[styles.column]}>
        {/* Back Button */}
        <IconButton
          iconName="menu"
          // onPress={goBackHandler}
          iconColor={color}
          style={styles.gridItem}
        />
      </View>

      {/* Center of the header (title) */}
      <View style={[styles.column, styles.headerCenter]}>
        {title && (
          <Text style={[theme.typography.heading, { color }]}>{title}</Text>
        )}
      </View>

      {/* Right side of the header (grid items) */}
      <View style={[styles.column, styles.headerRight]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  headerCenter: {
    width: "50%",
    justifyContent: "center",
  },
  headerRight: {
    justifyContent: "flex-end",
  },
  gridItem: {
    marginHorizontal: 4,
  },
});
