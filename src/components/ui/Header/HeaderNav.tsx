import { StyleSheet, Alert } from "react-native";
import IconButton from "../Button/IconButton";
import { useTheme } from "@/hooks/theme/useTheme";
import BackButton from "../Button/BackButton";
import { ThemedView, ThemedText, ThemedViewProps } from "@/components/Themed";

export default function HeaderNav({
  title = "",
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
          paddingHorizontal: theme.spacing.sm,
          paddingVertical: theme.spacing.sm,
          backgroundColor: "transparent",
        },
        style,
      ]}
      {...restProps}
    >
      {/* Left side of the header */}
      <ThemedView style={[styles.column]}>
        {/* Back Button */}
        <BackButton iconColor={color} style={styles.gridItem} />
      </ThemedView>

      {/* Center of the header (title) */}
      <ThemedView style={[styles.column, styles.headerCenter]}>
        {title && (
          <ThemedText style={[theme.typography.title, { color }]}>
            {title}
          </ThemedText>
        )}
      </ThemedView>

      {/* Right side of the header (grid items) */}
      <ThemedView style={[styles.column, styles.headerRight]}>
        {/* Notification Button */}
        {!hideNotice && (
          <IconButton
            iconName="bell"
            onPress={() => Alert.alert("Show Notifications!")}
            iconColor={color}
            style={styles.gridItem}
          />
        )}
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
