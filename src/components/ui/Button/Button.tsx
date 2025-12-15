import { Platform, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@/src/hooks/useTheme";
import { ButtonProps } from "@/src/types/button";
import { BlurView } from "expo-blur";

const Button: React.FC<ButtonProps> = ({
  label,
  contentLeft,
  contentRight,
  style,
  labelStyle,
  ...restProps
}) => {
  const theme = useTheme();
  const labelColor = theme.colors.textPrimary;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          borderRadius: theme.radius.xxl,
          paddingHorizontal: theme.spacing.md + 4,
          paddingVertical: theme.spacing.sm,
          gap: theme.spacing.xs + 2,
        },
        style,
      ]}
      {...restProps}
    >
      <BlurView
        intensity={Platform.OS === "ios" ? 5 : 10}
        style={[
          StyleSheet.absoluteFill,
          { borderRadius: theme.radius.pill, overflow: "hidden" },
        ]}
      />
      {contentLeft}
      <Text
        style={[
          theme.typography.button,
          styles.buttonLabel,
          { color: labelColor },
          labelStyle,
        ]}
      >
        {label}
      </Text>
      {contentRight}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(85, 85, 85, 0.8)",
  },
  buttonLabel: {
    textTransform: "capitalize",
  },
});

export default Button;
