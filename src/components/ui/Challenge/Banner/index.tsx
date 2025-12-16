// src/components/ui/Challenge/Banner/index.tsx
import { Alert, Pressable, StyleSheet, View, ViewProps } from "react-native";
import { Image, ImageBackground } from "expo-image";
import { Size } from "@/src/constants/Shape";
import { useTheme } from "@/src/hooks/useTheme";
import BannerButton from "../../Button/BannerButton";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

// Import local image using require
const bannerImage = require("@/assets/images/Challenge Thumbnail.png");
const brandImage = require("@/assets/images/Challenge icon.png");
const brandImageWidthPercent = 20;

export default function Banner({ style }: ViewProps) {
  const theme = useTheme();
  const scale = useSharedValue(1);

  const pressStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View
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
        <View
          style={[
            styles.buttonGroup,
            {
              padding: theme.spacing.md,
            },
          ]}
        >
          <Animated.View style={pressStyle}>
            <Pressable
              onPressIn={() => (scale.value = withSpring(0.96))}
              onPressOut={() => (scale.value = withSpring(1))}
            >
              <BannerButton
                iconName="link"
                label="register"
                onPress={() => Alert.alert("In Progress")}
              />
            </Pressable>
          </Animated.View>

          <Animated.View style={pressStyle}>
            <Pressable
              onPressIn={() => (scale.value = withSpring(0.96))}
              onPressOut={() => (scale.value = withSpring(1))}
            >
              <BannerButton
                iconName="live"
                label="in progress"
                onPress={() => Alert.alert("In Progress")}
              />
            </Pressable>
          </Animated.View>
        </View>
      </ImageBackground>

      <Image
        source={brandImage} // use require for local assets
        style={[
          styles.brandImage,
          {
            borderColor: "rgba(231, 231, 233, 1)",
            borderRadius: theme.radius.pill,
            bottom: (-Size.deviceWidth * brandImageWidthPercent) / 100 / 2 + 2,
          },
        ]}
        transition={300}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bannerImage: {
    width: "100%",
    aspectRatio: 375 / 200,
    alignSelf: "center",
    overflow: "hidden",
  },
  brandImage: {
    width: `${brandImageWidthPercent}%`,
    aspectRatio: 1,
    borderWidth: 1,
    position: "absolute",
    zIndex: 1,
    alignSelf: "center",
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
