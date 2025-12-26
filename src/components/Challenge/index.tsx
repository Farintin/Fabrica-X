// src/components/Challenge/index.tsx
import { LinearGradient } from "expo-linear-gradient";
import ContainerCards from "./ContainerCards";
import { StyleProp, ViewStyle } from "react-native";
import { useTheme } from "@/hooks/theme/useTheme";
import { Image } from "expo-image";
import { ThemedViewProps } from "@/components/Themed";
import { useEffect, useState } from "react";
import AnimatedBanner from "./AnimatedBanner";
import Animated, { FadeInUp } from "react-native-reanimated";
import { ChallengeAnimationProvider } from "./ChallengeAnimationContext";
import { useHomeAnimation } from "@/screens/Home/HomeAnimationContext";

const brandImage = require("@/assets/images/Challenge-icon.png");
const brandImageWidthPercent = 20;

export default function Challenge({
  onReady,
  style,
  ...restProps
}: ThemedViewProps & { onReady?: () => void; style?: StyleProp<ViewStyle> }) {
  const [bannerDone, setBannerDone] = useState(false);
  const [groupButtonDone, setGroupButtonDone] = useState(false);
  const theme = useTheme();
  const { animateOnce } = useHomeAnimation();

  useEffect(() => {
    if (groupButtonDone) {
      onReady?.();
    }
  }, [groupButtonDone]);

  return (
    <ChallengeAnimationProvider
      value={{
        notifyGroupButtonEntered: () => setGroupButtonDone(true),
      }}
    >
      <LinearGradient
        colors={["rgba(178, 176, 179, 1)", "rgba(18, 18, 18, 1)"]}
        style={[style]}
        {...restProps}
      >
        <AnimatedBanner onEntered={() => setBannerDone(true)} />

        {/* Everything else waits */}
        {bannerDone && (
          <>
            <Animated.View
              entering={
                animateOnce ? FadeInUp.delay(20).duration(220) : undefined
              }
              style={{ zIndex: 2 }}
            >
              <Image
                source={brandImage}
                style={{
                  width: `${brandImageWidthPercent}%`,
                  aspectRatio: 1,
                  marginTop: -50,
                  marginBottom: -30,
                  zIndex: 1,
                  alignSelf: "center",
                  borderColor: "rgba(231, 231, 233, 1)",
                  borderWidth: 1,
                  borderRadius: theme.radius.pill,
                }}
              />
            </Animated.View>

            <Animated.View
              entering={
                animateOnce ? FadeInUp.delay(1000).duration(420) : undefined
              }
            >
              <ContainerCards style={{ marginTop: theme.spacing.xs }} />
            </Animated.View>
          </>
        )}
      </LinearGradient>
    </ChallengeAnimationProvider>
  );
}
