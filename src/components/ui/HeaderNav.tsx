import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Alert, ViewProps } from "react-native";
import IconButton from "./IconButton";
import { useTheme } from "@/src/hooks/useTheme";

export default function HeaderNav({
  title = "",
  hideNotice = false,
  style,
  ...restProps
}: { title?: string; hideNotice?: boolean } & ViewProps) {
  const theme = useTheme();
  const router = useRouter();
  const color = theme.colors.textPrimary;

  const goBackHandler = () => {
    router.canGoBack() ? router.back() : null;
  };

  return (
    <View
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
      <View style={[styles.column]}>
        {/* Back Button */}
        <IconButton
          iconName="arrow-left"
          onPress={goBackHandler}
          iconColor={color}
          style={styles.gridItem}
        />
      </View>

      {/* Center of the header (title) */}
      <View style={[styles.column, styles.headerCenter]}>
        {title && (
          <Text style={[theme.typography.title, { color }]}>{title}</Text>
        )}
      </View>

      {/* Right side of the header (grid items) */}
      <View style={[styles.column, styles.headerRight]}>
        {/* Notification Button */}
        {!hideNotice && (
          <IconButton
            iconName="bell"
            onPress={() => Alert.alert("Show Notifications!")}
            iconColor={color}
            style={styles.gridItem}
          />
        )}
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
