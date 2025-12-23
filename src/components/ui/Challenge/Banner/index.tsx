// src/components/ui/Challenge/Banner/index.tsx
import { Alert, Pressable, StyleSheet, View, ViewProps } from "react-native";
import { ImageBackground } from "expo-image";
import { useTheme } from "@/hooks/useTheme";
import BannerButton from "../../Button/BannerButton";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

// Import local image using require
const bannerImage = require("@/assets/images/Challenge-Thumbnail.png");

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
              padding: theme.spacing.base,
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
                onPress={() => Alert.alert("Register")}
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
  buttonGroup: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
