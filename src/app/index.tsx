// src/app/index.tsx
import { useRef, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeaderNav from "@/src/components/ui/Header/HeaderNav";
import Challenge from "@/components/ui/Challenge";
import SegmentedTabs from "@/components/SegmentedTabs";
import { useTheme } from "@/hooks/useTheme";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import OverlayHeader from "../components/ui/Header/OverlayHeader";
import SegmentedTabsNav from "../components/SegmentedTabs/SegmentedTabsNav";
import LeaderboardTabHeader from "../components/ui/Leaderboard/LeaderboardTabHeader";
import {
  useHeaderAnimation,
  useStickyLeaderboardHeaderAnimation,
  useStickyTabsNavAnimation,
} from "../hooks/animations";
import { View } from "../components/Themed";

export default function Home() {
  const [tab, setTab] = useState<"prizes" | "leaderboard">("prizes");
  const [isSticky, setIsSticky] = useState(false);
  const [isTabsSticky, setIsTabsSticky] = useState(false);
  const [challengeReady, setChallengeReady] = useState(false);
  const challengeY = useRef(0);
  const tabsY = useRef(0);
  const headerNavHeight = useRef(0);
  const theme = useTheme();
  const { top } = useSafeAreaInsets();
  const [maxTabsHeight, setMaxTabsHeight] = useState<number>(0);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = e.nativeEvent.contentOffset.y;
    setIsSticky(scrollY > challengeY.current + top - headerNavHeight.current);
    setIsTabsSticky(scrollY >= tabsY.current - top - headerNavHeight.current);
  };

  const headerAnim = useHeaderAnimation(isSticky);
  const stickyTabsNavAnim = useStickyTabsNavAnimation(isTabsSticky);
  const stickyLeaderboardHeaderAnim =
    useStickyLeaderboardHeaderAnimation(isTabsSticky);

  return (
    <View style={[styles.root]}>
      <LinearGradient
        colors={[
          theme.colors.natural.black,
          theme.colors.natural.black,
          theme.colors.background.black,
        ]}
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0, y: 0.5 }}
        style={{ flex: 1 }}
      >
        <OverlayHeader
          style={[
            {
              paddingTop: top,
              paddingBottom:
                isSticky && !isTabsSticky
                  ? theme.spacing.base
                  : theme.spacing.sm,
              backgroundColor: isTabsSticky
                ? theme.colors.background.black
                : theme.colors.natural.transparent,
              gap: theme.spacing.sm,
            },
          ]}
        >
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
            <Animated.View key="sticky-tabs-nav" style={stickyTabsNavAnim}>
              <SegmentedTabsNav
                isSticky={true}
                value={tab}
                onChange={setTab}
                style={{ marginHorizontal: theme.spacing.base }}
              />
            </Animated.View>
          )}

          {isTabsSticky && tab === "leaderboard" && (
            <Animated.View
              key="sticky-tabs-leaderboard-header"
              style={stickyLeaderboardHeaderAnim}
            >
              <LeaderboardTabHeader
                isSticky={true}
                style={{
                  marginHorizontal: theme.spacing.base,
                }}
              />
            </Animated.View>
          )}
        </OverlayHeader>

        {/* SCROLLABLE content */}
        <ScrollView
          onScroll={onScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <Challenge
            onLayout={(e) => {
              challengeY.current = e.nativeEvent.layout.y;
              // allow challenge to mount first
              requestAnimationFrame(() => setChallengeReady(true));
            }}
            style={{ paddingBottom: theme.spacing.sm }}
          />

          {/* Tabs */}
          {challengeReady && (
            <SegmentedTabs
              value={tab}
              setHandler={setTab}
              onLayout={(e) => {
                const { height, y } = e.nativeEvent.layout;
                tabsY.current = y;
                if (!isTabsSticky) {
                  setMaxTabsHeight((prev) => (height > prev ? height : prev));
                }
              }}
              style={{
                minHeight: isTabsSticky ? undefined : maxTabsHeight,
              }}
            />
          )}
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
