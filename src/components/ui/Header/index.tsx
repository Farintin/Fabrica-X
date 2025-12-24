import { StyleSheet, Alert, StyleProp, TextStyle } from "react-native";
import IconButton from "../Button/IconButton";
import { useTheme } from "@/hooks/theme/useTheme";
import BackButton from "../Button/BackButton";
import { ThemedView, ThemedText, ThemedViewProps } from "@/components/Themed";

export type Props = ThemedViewProps & {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  contentLeft?: any;
  contentRight?: any;
};

export default function Header({
  title,
  titleStyle,
  contentLeft,
  contentRight,
  style,
  ...restProps
}: Props) {
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
      <ThemedView style={[styles.column]}>{contentLeft}</ThemedView>

      {/* Center of the header (title) */}
      <ThemedView style={[styles.column, styles.headerCenter]}>
        {title && (
          <ThemedText style={[theme.typography.heading, { color }, titleStyle]}>
            {title}
          </ThemedText>
        )}
      </ThemedView>

      {/* Right side of the header (grid items) */}
      <ThemedView style={[styles.column, styles.headerRight]}>
        {contentRight}
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
