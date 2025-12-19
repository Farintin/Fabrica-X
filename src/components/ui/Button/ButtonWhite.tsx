import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Text,
} from "react-native";
import SvgIcon from "../SvgIcon"; // Import the icon component
import { useTheme } from "@/src/hooks/useTheme";

interface ButtonWhiteProps {
  iconName:
    | "arrow-left"
    | "bell"
    | "link"
    | "live"
    | "user-octagon"
    | "location"
    | "duration"
    | "leaderboard"
    | "voucher"
    | "gift";
  label?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  iconSize?: number;
  iconColor?: string;
}

export default function ButtonWhite({
  iconName,
  label,
  onPress,
  style,
  iconSize = 12,
}: ButtonWhiteProps) {
  const theme = useTheme();
  const color = theme.colors.textBlack;
  let buttonStyle: StyleProp<ViewStyle> = styles.button;

  if (label) {
    buttonStyle = {
      ...buttonStyle,
      width: "auto",
      paddingHorizontal: 14,
    };
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        buttonStyle,
        {
          backgroundColor: theme.colors.natural.white,
          borderRadius: theme.radius.pill,
          gap: theme.spacing.xs,
        },
        style,
      ]}
    >
      <SvgIcon name={iconName} size={iconSize} color={color} />
      {label && (
        <Text style={[styles.label, theme.typography.buttonSmall, { color }]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 28,
    height: 28,
    paddingHorizontal: 0,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    textTransform: "capitalize",
  },
});
