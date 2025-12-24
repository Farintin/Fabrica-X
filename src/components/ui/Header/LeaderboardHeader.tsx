// import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import IconButton from "../Button/IconButton";
import { useTheme } from "@/hooks/theme/useTheme";
import { Heading } from "../../typography/Heading";
import BackButton from "../Button/BackButton";
import { ThemedView, ThemedViewProps } from "@/components/Themed";

export default function LeaderboardHeader({
  title = "Leaderboard",
  hideNotice = false,
  style,
  ...restProps
}: { title?: string; hideNotice?: boolean } & ThemedViewProps) {
  const theme = useTheme();
  const color = theme.colors.textPrimary;

  return (
    <ThemedView
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
      <ThemedView style={[styles.column]}>
        <BackButton iconColor={color} style={styles.gridItem} />
      </ThemedView>

      {/* Center of the header (title) */}
      <ThemedView style={[styles.column, styles.headerCenter]}>
        {title && <Heading style={[{ color }]}>{title}</Heading>}
      </ThemedView>

      {/* Right side of the header (grid items) */}
      <ThemedView style={[styles.column, styles.headerRight]}>
        <IconButton iconName="menu" iconColor={color} style={styles.gridItem} />
      </ThemedView>
    </ThemedView>
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
