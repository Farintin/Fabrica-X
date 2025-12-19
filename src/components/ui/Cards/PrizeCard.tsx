import { PrizeCardProps } from "@/src/types/card";
import { BlurView } from "expo-blur";
import {
  TouchableOpacity,
  ImageBackground,
  View,
  Text,
  Platform,
  StyleSheet,
} from "react-native";
import SvgIcon from "../SvgIcon";
import { useTheme } from "@/src/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";

export default function PrizeCard({
  source: imageSource,
  iconName,
  levelText,
  infoText,
  style,
}: PrizeCardProps) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[
        {
          borderRadius: theme.radius.md,
          overflow: "hidden",
        },
        style,
      ]}
    >
      <ImageBackground
        source={imageSource}
        style={{
          gap: theme.spacing.md,
          alignItems: "center",
        }}
      >
        <SvgIcon
          name={iconName}
          size={28}
          color={theme.colors.primary}
          style={{
            margin: theme.spacing.lg,
          }}
        />
        <View
          style={{
            alignSelf: "stretch",
          }}
        >
          <BlurView
            intensity={Platform.OS === "ios" ? 5 : 10}
            tint="light"
            style={[StyleSheet.absoluteFill]}
          />
          <LinearGradient
            colors={[
              "transparent",
              "transparent",
              "transparent",
              "rgba(00, 0, 0, 0.15)",
              "rgba(00, 0, 0, 0.25)",
            ]}
            style={[
              {
                padding: theme.spacing.md,
                gap: theme.spacing.sm,
                alignItems: "center",
              },
            ]}
          >
            <Text
              style={[
                theme.typography.heading,
                { color: theme.colors.primary },
              ]}
            >
              {levelText}
            </Text>
            <Text
              style={[
                theme.typography.subHeading,
                { color: theme.colors.natural.white },
              ]}
            >
              {infoText}
            </Text>
          </LinearGradient>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
