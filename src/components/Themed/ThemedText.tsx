// src/components/Themed/ThemedText.tsx
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import { ThemeProps } from "@/types/theme";
import { Text, TextProps as RNTextProps } from "react-native";

export type ThemedTextProps = RNTextProps & ThemeProps;

export function ThemedText({
  style,
  lightColor,
  darkColor,
  ...props
}: ThemedTextProps) {
  const color = useThemeColor({ lightColor, darkColor }, "text");

  return <Text {...props} style={[{ color }, style]} />;
}
