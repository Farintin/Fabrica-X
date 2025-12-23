// import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import IconButton from "../Button/IconButton";
import { useTheme } from "@/hooks/useTheme";
import { Heading } from "../../typography/Heading";
import { View, ViewProps } from "../../Themed";
import BackButton from "../Button/BackButton";

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
        <BackButton iconColor={color} style={styles.gridItem} />
      </View>

      {/* Center of the header (title) */}
      <View style={[styles.column, styles.headerCenter]}>
        {title && <Heading style={[{ color }]}>{title}</Heading>}
      </View>

      {/* Right side of the header (grid items) */}
      <View style={[styles.column, styles.headerRight]}>
        <IconButton iconName="menu" iconColor={color} style={styles.gridItem} />
      </View>
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
