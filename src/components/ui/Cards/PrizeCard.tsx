import { PrizeCardProps } from "@/components/ui/Cards/Card.types";
import { BlurView } from "expo-blur";
import {
  TouchableOpacity,
  ImageBackground,
  Platform,
  StyleSheet,
} from "react-native";
import SvgIcon from "../SvgIcon";
import { useTheme } from "@/hooks/theme/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { Heading } from "../../typography/Heading";
import { ThemedView, ThemedText } from "@/components/Themed";

export default function PrizeCard({
  source: imageSource,
  iconName,
  levelText,
  infoText,
  grow = 1,
  style,
}: PrizeCardProps) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[
        {
          borderRadius: theme.radius.md,
          overflow: "hidden",
          flexGrow: grow,
        },
        style,
      ]}
    >
      <ImageBackground
        source={imageSource}
        style={{
          gap: theme.spacing.base,
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
        <ThemedView
          style={{
            alignSelf: "stretch",
          }}
        >
          <BlurView
            intensity={Platform.OS === "ios" ? 10 : 20}
            tint="light"
            style={[StyleSheet.absoluteFill]}
          />
          <LinearGradient
            colors={[
              "transparent",
              "transparent",
              "rgba(00, 0, 0, 0.15)",
              "rgba(00, 0, 0, 0.25)",
            ]}
            style={[
              {
                padding: theme.spacing.base,
                gap: theme.spacing.sm,
                alignItems: "center",
              },
            ]}
          >
            <Heading style={[{ color: theme.colors.primary }]}>
              {levelText}
            </Heading>
            <ThemedText
              style={[
                theme.typography.title,
                { color: theme.colors.natural.white },
              ]}
            >
              {infoText}
            </ThemedText>
          </LinearGradient>
        </ThemedView>
      </ImageBackground>
    </TouchableOpacity>
  );
}
