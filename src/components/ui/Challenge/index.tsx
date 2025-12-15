import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import Banner from "./Banner";
import ContainerCards from "./ContainerCards";
import { StyleProp, ViewProps, ViewStyle } from "react-native";
import { useTheme } from "@/src/hooks/useTheme";

export default function Challenge({
  style,
  ...restProps
}: ViewProps & { style?: StyleProp<ViewStyle> }) {
  const theme = useTheme();

  return (
    <LinearGradient
      colors={["rgba(178, 176, 179, 1)", "rgba(18, 18, 18, 1)"]}
      style={[{ gap: theme.spacing.sm }, style]}
      {...restProps}
    >
      <Banner />
      <ContainerCards style={{ zIndex: -1 }} />
    </LinearGradient>
  );
}
