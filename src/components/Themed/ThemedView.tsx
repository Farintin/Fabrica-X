// src/components/Themed/ThemedView.tsx
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import { ThemeProps } from "@/types/theme";
import { View, ViewProps as RNViewProps } from "react-native";

export type ThemedViewProps = RNViewProps & ThemeProps;

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...props
}: ThemedViewProps) {
  const backgroundColor =
    lightColor || darkColor
      ? useThemeColor({ lightColor, darkColor }, "background")
      : undefined;

  const themedStyle = backgroundColor ? { backgroundColor } : undefined;

  return <View {...props} style={[themedStyle, style]} />;
}

/**
 * Semantic exports
 */
export const Screen = ThemedView; // screen background
export const Box = View; // always transparent
