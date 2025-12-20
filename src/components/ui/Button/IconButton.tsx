import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import SvgIcon from "../SvgIcon"; // Import the icon component
import { useTheme } from "@/src/hooks/useTheme";
import { IconButtonProps } from "@/src/types/button";

export default function IconButton({
  iconName,
  onPress,
  style,
  iconSize = 26,
  iconColor = "#000",
}: IconButtonProps) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { padding: theme.spacing.xs, borderRadius: theme.radius.pill },
        style,
      ]}
    >
      <SvgIcon name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});
