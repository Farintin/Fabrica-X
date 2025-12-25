// src/components/Challenge/Banner/index.tsx
import { Alert, Pressable, StyleSheet } from "react-native";
import { ImageBackground } from "expo-image";
import { useTheme } from "@/hooks/theme/useTheme";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { ThemedView, ThemedViewProps } from "@/components/Themed";
import { BannerButton } from "@/components/ui/Button";
import { BannerAction } from "./BannerAction";

// Import local image using require
const bannerImage = require("@/assets/images/Challenge-Thumbnail.png");

export default function Banner({ style }: ThemedViewProps) {
  const theme = useTheme();

  return (
    <ThemedView
      style={[
        theme.colors.shadow.banner,
        {
          backgroundColor: theme.colors.natural.black,
          borderBottomLeftRadius: theme.radius.xxl,
          borderBottomRightRadius: theme.radius.xxl,
        },
        style,
      ]}
    >
      <ImageBackground
        source={bannerImage}
        contentFit="contain"
        contentPosition={"bottom center"}
        style={[
          styles.bannerImage,
          {
            borderBottomLeftRadius: theme.radius.xxl,
            borderBottomRightRadius: theme.radius.xxl,
          },
        ]}
      >
        <ThemedView
          style={[
            styles.buttonGroup,
            {
              padding: theme.spacing.base,
            },
          ]}
        >
          <BannerAction delay={420}>
            <BannerButton
              iconName="link"
              label="register"
              onPress={() => Alert.alert("Register")}
            />
          </BannerAction>

          <BannerAction delay={800}>
            <BannerButton
              iconName="live"
              label="in progress"
              onPress={() => Alert.alert("In Progress")}
            />
          </BannerAction>
        </ThemedView>
      </ImageBackground>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  bannerImage: {
    width: "100%",
    aspectRatio: 375 / 200,
    alignSelf: "center",
    overflow: "hidden",
  },
  buttonGroup: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
