// src/screens/Home/index.tsx
import { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
  LayoutChangeEvent,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeHeader from "@/components/ui/Header/HomeHeader";
import Challenge from "@/components/Challenge";
import SegmentedTabs from "@/components/Tabs/SegmentedTabs";
import { useTheme } from "@/hooks/theme/useTheme";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import OverlayHeader from "@/components/ui/Header/OverlayHeader";
import SegmentedTabsNav from "@/components/Tabs/SegmentedTabs/SegmentedTabsNav";
import LeaderboardTabHeader from "@/components/Leaderboard/LeaderboardTabHeader";
import { useStickyTabsNavAnimation } from "@/hooks/animations";
import { ThemedView } from "@/components/Themed";
import { HOME_HEADER_ENTER } from "@/libs/animations";

export default function HomeScreen() {
  const [tab, setTab] = useState<"prizes" | "leaderboard">("leaderboard");
  const [isSticky, setIsSticky] = useState(false);
  const [isTabsSticky, setIsTabsSticky] = useState(false);
  const [showStickyLeaderboardHeader, setShowStickyLeaderboardHeader] =
    useState<boolean>(false);
  const [challengeReady, setChallengeReady] = useState(false);
  const [maxTabsHeight, setMaxTabsHeight] = useState<number>(0);
  const scrollRef = useRef<ScrollView | null>(null);
  const challengeY = useRef(0);
  const tabsY = useRef(0);
  const tabHeights = useRef<Record<string, number>>({});
  const headerNavHeight = useRef(0);
  const theme = useTheme();
  const { top } = useSafeAreaInsets();

  const tabHeight = tabHeights.current[tab] ?? 0;

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = e.nativeEvent.contentOffset.y;
    setIsSticky(scrollY > challengeY.current + top - headerNavHeight.current);
    setIsTabsSticky(scrollY >= tabsY.current - top - headerNavHeight.current);
  };

  const onScrollEndDrag = () => {
    if (maxTabsHeight > tabHeight) {
      scrollRef.current?.scrollTo({ y: tabsY.current, animated: true });

      // fallback
      requestAnimationFrame(() => {
        setTimeout(() => {
          setMaxTabsHeight(tabHeight);
        }, 250);
      });
    }
  };

  const onMomentumScrollEnd = () => {
    if (maxTabsHeight > tabHeight) {
      setMaxTabsHeight(tabHeight);
    }
  };

  const stickyTabsNavAnim = useStickyTabsNavAnimation(isTabsSticky);

  useEffect(() => {
    setShowStickyLeaderboardHeader(isTabsSticky && tab === "leaderboard");
  }, [isTabsSticky, tab]);

  return (
    <ThemedView style={[styles.root]}>
      <LinearGradient
        colors={[
          theme.colors.natural.black,
          theme.colors.natural.black,
          theme.colors.background.black,
        ]}
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0, y: 0.5 }}
        style={[styles.gradient]}
      >
        <ThemedView style={[styles.container]}>
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
              },
            ]}
          >
            {/* Header Nav */}
            {challengeReady && (
              <Animated.View entering={HOME_HEADER_ENTER}>
                <HomeHeader
                  title={isTabsSticky ? "Fabrica X" : ""}
                  onLayout={(e: LayoutChangeEvent) => {
                    headerNavHeight.current = e.nativeEvent.layout.height;
                  }}
                />
              </Animated.View>
            )}

            {/* Sticky Segmented Tabs */}
            {isTabsSticky && (
              <Animated.View
                key="sticky-tabs-nav"
                style={[
                  stickyTabsNavAnim,
                  {
                    marginHorizontal: theme.spacing.base,
                  },
                ]}
              >
                <SegmentedTabsNav
                  isSticky={true}
                  value={tab}
                  onChange={setTab}
                  style={{ marginTop: theme.spacing.lg }}
                />
              </Animated.View>
            )}

            {showStickyLeaderboardHeader && (
              <LeaderboardTabHeader
                isSticky={true}
                style={[
                  {
                    marginHorizontal: theme.spacing.base,
                  },
                ]}
              />
            )}
          </OverlayHeader>

          {/* SCROLLABLE content */}
          <ScrollView
            ref={scrollRef}
            onScroll={onScroll}
            onScrollEndDrag={onScrollEndDrag}
            onMomentumScrollEnd={onMomentumScrollEnd}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            bounces={false}
            alwaysBounceVertical={false}
            overScrollMode="never"
          >
            <Challenge
              onReady={() => setChallengeReady(true)}
              style={{ paddingBottom: theme.spacing.sm }}
            />

            {/* Tabs */}
            {challengeReady && (
              <SegmentedTabs
                value={tab}
                setHandler={setTab}
                onLayout={(e: LayoutChangeEvent) => {
                  const { height, y } = e.nativeEvent.layout;
                  tabsY.current = y;

                  if (!isTabsSticky) {
                    setMaxTabsHeight((prev) => (height > prev ? height : prev));
                  }
                  tabHeights.current[tab] = height;
                }}
                style={[{ minHeight: maxTabsHeight }]}
              />
            )}
          </ScrollView>
        </ThemedView>
      </LinearGradient>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
