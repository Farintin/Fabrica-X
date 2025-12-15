import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@/src/hooks/useTheme";
import { ButtonProps } from "@/src/types/button";

export default function ButtonOutlined({
  label,
  labelColor,
  color,
  borderColor,
  size = "large",
  onPress,
  style,
}: ButtonProps & {
  color?: string;
  borderColor?: string;
  labelColor?: string;
  size?: "small" | "large";
}) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        size === "small" && {
          paddingHorizontal: theme.spacing.sm + 4,
          paddingVertical: theme.spacing.xs,
          gap: theme.spacing.xs,
        },
        size === "large" && {
          paddingHorizontal: theme.spacing.md,
          paddingVertical: theme.spacing.sm,
          gap: theme.spacing.sm,
        },
        {
          backgroundColor: color || "transparent",
          borderRadius: theme.radius.pill,
          borderColor: borderColor || theme.colors.natural.white,
          borderWidth: 1,
        },
        style,
      ]}
    >
      <Text
        style={[
          size === "small" && theme.typography.buttonSmall,
          size === "large" && theme.typography.button,
          {
            color: labelColor || theme.colors.natural.white,
          },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
  },
});
