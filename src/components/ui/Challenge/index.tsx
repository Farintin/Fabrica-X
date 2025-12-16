// src/components/ui/Challenge/index.tsx
import { LinearGradient } from "expo-linear-gradient";
import Banner from "./Banner";
import ContainerCards from "./ContainerCards";
import { StyleProp, ViewProps, ViewStyle } from "react-native";
import { useTheme } from "@/src/hooks/useTheme";
import { Image } from "expo-image";
import { Size } from "@/src/constants/Shape";

const brandImage = require("@/assets/images/Challenge-icon.png");
const brandImageWidthPercent = 20;

export default function Challenge({
  style,
  ...restProps
}: ViewProps & { style?: StyleProp<ViewStyle> }) {
  const theme = useTheme();

  return (
    <LinearGradient
      colors={["rgba(178, 176, 179, 1)", "rgba(18, 18, 18, 1)"]}
      style={[style]}
      {...restProps}
    >
      <Banner style={{ marginBottom: theme.spacing.sm }} />

      <Image
        source={brandImage} // use require for local assets
        style={[
          {
            width: `${brandImageWidthPercent}%`,
            aspectRatio: 1,
            borderWidth: 1,
            // position: "relative",
            marginTop: -55,
            marginBottom: -32,
            zIndex: 1,
            alignSelf: "center",
            borderColor: "rgba(231, 231, 233, 1)",
            borderRadius: theme.radius.pill,
            // bottom: (-Size.deviceWidth * brandImageWidthPercent) / 100 / 2 + 2,
          },
        ]}
        transition={300}
      />
      <ContainerCards style={{ marginTop: theme.spacing.xs }} />
    </LinearGradient>
  );
}
