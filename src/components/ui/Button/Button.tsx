import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "@/src/hooks/useTheme";
import { ButtonProps } from "@/src/types/button";
import { BlurView } from "expo-blur";
import { ButtonText } from "../../typography/ButtonText";

export default function Button({
  label,
  contentLeft,
  contentRight,
  style,
  labelStyle,
  labelColor,
  size = "large",
  blurBackground = false,
  ...restProps
}: ButtonProps) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: theme.radius.pill,
          backgroundColor: "rgba(85, 85, 85, 0.8)",
        },
        size === "small" && {
          paddingHorizontal: theme.spacing.md,
          paddingVertical: theme.spacing.xs,
          gap: theme.spacing.xs,
        },
        size === "large" && {
          paddingHorizontal: theme.spacing.base,
          paddingVertical: theme.spacing.sm,
          gap: theme.spacing.sm,
        },
        style,
      ]}
      {...restProps}
    >
      {blurBackground && (
        <BlurView
          intensity={Platform.OS === "ios" ? 5 : 10}
          style={[
            StyleSheet.absoluteFill,
            { borderRadius: theme.radius.pill, overflow: "hidden" },
          ]}
        />
      )}
      {contentLeft}
      {label && (
        <ButtonText
          style={[
            size === "small" && theme.typography.buttonSmall,
            size === "large" && theme.typography.button,
            { color: labelColor || theme.colors.textPrimary },
            labelStyle,
          ]}
        >
          {label}
        </ButtonText>
      )}
      {contentRight}
    </TouchableOpacity>
  );
}
