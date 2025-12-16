// src/app/index.tsx
import { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import HeaderNav from "@/components/ui/HeaderNav";
import Challenge from "@/components/ui/Challenge";
import SegmentedTabs from "@/components/screens/SegmentedTabs";
import PrizesSection from "@/components/screens/SegmentedTabs/PrizesSection";
import { useTheme } from "@/hooks/useTheme";
import LeaderboardSection, {
  LeaderboardHeader,
} from "@/components/screens/SegmentedTabs/LeaderboardSection";
import Animated, {
  FadeInLeft,
  FadeInRight,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from "react-native-reanimated";

export default function Home() {
  const [tab, setTab] = useState<"prizes" | "leaderboard">("prizes");
  const [isSticky, setIsSticky] = useState(false);
  const [isTabsSticky, setIsTabsSticky] = useState(false);
  const [challengeReady, setChallengeReady] = useState(false);
  const [tabsNavReady, setTabsNavReady] = useState(false);
  const challengeY = useRef(0);
  const segmentY = useRef(0);
  const headerNavHeight = useRef(0);
  const theme = useTheme();
  const { top, bottom } = useSafeAreaInsets();

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = e.nativeEvent.contentOffset.y;
    setIsSticky(scrollY > challengeY.current + top - headerNavHeight.current);
    setIsTabsSticky(
      scrollY >= segmentY.current - top - headerNavHeight.current
    );
  };

  const headerAnim = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(isSticky ? 0 : -12, { duration: 180 }),
      },
    ],
  }));

  const blurAnim = useAnimatedStyle(() => ({
    opacity: withTiming(isSticky ? 1 : 0, { duration: 600 }),
  }));

  const stickyTabsAnim = useAnimatedStyle(() => ({
    opacity: withTiming(isTabsSticky ? 1 : 0, { duration: 160 }),
    transform: [
      { translateY: withTiming(isTabsSticky ? 0 : 8) },
      { scale: withTiming(isTabsSticky ? 1 : 0.96) },
    ],
  }));
  const stickyLeaderboardHeaderNarAnim = useAnimatedStyle(() => ({
    opacity: withTiming(isTabsSticky ? 1 : 0, { duration: 160 }),
    transform: [
      { translateY: withTiming(isTabsSticky ? 0 : 8) },
      { scale: withTiming(isTabsSticky ? 1 : 0.96) },
    ],
  }));

  const tabsNavAnim = useAnimatedStyle(() => ({
    opacity: withDelay(
      1800,
      withTiming(challengeReady ? 1 : 0, { duration: 800 })
    ),
    transform: [
      {
        translateY: withDelay(
          1500,
          withTiming(challengeReady ? 0 : 30, { duration: 1200 })
        ),
      },
      {
        scale: withTiming(challengeReady ? 1 : 0.97, { duration: 1500 }),
      },
    ],
  }));

  return (
    <>
      {/* Overlay header */}
      <View
        style={[
          styles.stickyTabs,
          {
            paddingTop: top,
            paddingBottom:
              isSticky && !isTabsSticky ? theme.spacing.md : theme.spacing.sm,
            backgroundColor: isTabsSticky
              ? theme.colors.background.black
              : theme.colors.natural.transparent,
            gap: theme.spacing.sm,
          },
        ]}
      >
        {/* Sticky Blur Header Nav */}
        {isSticky && (
          <Animated.View style={[StyleSheet.absoluteFill, blurAnim]}>
            <BlurView
              intensity={12}
              tint="dark"
              style={StyleSheet.absoluteFill}
            />
          </Animated.View>
        )}

        {/* Header Nav */}
        <Animated.View style={headerAnim}>
          <HeaderNav
            title={isTabsSticky ? "Fabrica X" : ""}
            onLayout={(e) => {
              headerNavHeight.current = e.nativeEvent.layout.height;
            }}
          />
        </Animated.View>

        {/* Sticky Segmented Tabs */}
        {isTabsSticky && (
          <Animated.View style={stickyTabsAnim}>
            <SegmentedTabs
              value={tab}
              onChange={setTab}
              style={{ marginHorizontal: theme.spacing.md }}
            />
          </Animated.View>
        )}

        {isTabsSticky && tab === "leaderboard" && (
          <Animated.View style={stickyTabsAnim}>
            <LeaderboardHeader
              style={{
                marginHorizontal: theme.spacing.md,
              }}
            />
          </Animated.View>
        )}
      </View>

      {/* SCROLLABLE content */}
      <ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        style={[styles.scroll, { backgroundColor: theme.colors.natural.black }]}
        contentContainerStyle={{
          paddingBottom: bottom,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Challenge
          onLayout={(e) => {
            challengeY.current = e.nativeEvent.layout.y;
            // allow cards to mount first
            requestAnimationFrame(() => {
              setChallengeReady(true);
            });
          }}
          style={{ paddingBottom: theme.spacing.sm }}
        />

        {/* Tabs */}
        <View
          style={{
            flex: 1,
            backgroundColor: theme.colors.background.black,
            paddingTop: theme.spacing.md,
            gap: theme.spacing.sm,
          }}
          onLayout={(e) => {
            segmentY.current = e.nativeEvent.layout.y;
          }}
        >
          {/* Original position (used for measuring) */}
          {challengeReady && (
            <Animated.View style={tabsNavAnim}>
              <SegmentedTabs
                value={tab}
                onChange={setTab}
                onLayout={() => {
                  requestAnimationFrame(() => {
                    setTabsNavReady(true);
                  });
                }}
                style={{ marginHorizontal: theme.spacing.md }}
              />
            </Animated.View>
          )}

          {/* Tab content */}
          {tabsNavReady && (
            <Animated.View
              key={tab}
              entering={
                tab === "leaderboard"
                  ? FadeInRight.delay(1000).duration(800)
                  : FadeInLeft.delay(1000).duration(800)
              }
              style={{ paddingHorizontal: theme.spacing.md }}
            >
              {tab === "leaderboard" && <LeaderboardSection />}
              {tab === "prizes" && <PrizesSection />}
            </Animated.View>
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  stickyTabs: {
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 2,
  },
  scroll: {
    flex: 1,
  },
});
