import { Platform, StyleSheet, Text, TouchableOpacity } from "react-native";
import SvgIcon from "@/components/ui/SvgIcon";
import { useTheme } from "@/src/hooks/useTheme";
import { IconButtonProps } from "@/src/types/button";
import { BlurView } from "expo-blur";

const Button: React.FC<IconButtonProps> = ({
  iconName,
  label,
  onPress,
  style,
  iconSize = 18,
}) => {
  const theme = useTheme();
  const iconColor = theme.colors.primary;
  const labelColor = theme.colors.textPrimary;

  return (
    <TouchableOpacity
      onPress={onPress}
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
    >
      <BlurView
        intensity={Platform.OS === "ios" ? 5 : 10}
        style={[
          StyleSheet.absoluteFill,
          { borderRadius: theme.radius.pill, overflow: "hidden" },
        ]}
      />
      <SvgIcon name={iconName} size={iconSize} color={iconColor} />
      <Text
        style={[
          theme.typography.button,
          styles.buttonLabel,
          { color: labelColor },
        ]}
      >
        {label}
      </Text>
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
