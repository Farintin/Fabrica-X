// src/hooks/useThemeColor.ts
import Colors from "@/constants/Colors";
import { ThemeProps } from "@/types/theme";
import { useColorScheme } from "react-native";

type ColorName = keyof typeof Colors.light;

export function useThemeColor(props: ThemeProps, colorName: ColorName) {
  const scheme = useColorScheme() ?? "light";

  if (scheme === "light" && props.lightColor) return props.lightColor;
  if (scheme === "dark" && props.darkColor) return props.darkColor;

  return Colors[scheme][colorName];
}
