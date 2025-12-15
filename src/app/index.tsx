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

export default function Home() {
  const [tab, setTab] = useState<"prizes" | "leaderboard">("prizes");
  const [isSticky, setIsSticky] = useState(false);
  const [isTabsSticky, setIsTabsSticky] = useState(false);
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

  return (
    <>
      {/* Overlay header */}
      <View
        style={[
          styles.stickyTabs,
          {
            paddingTop: top,
            paddingBottom: theme.spacing.sm,
            backgroundColor: isTabsSticky
              ? theme.colors.background.black
              : theme.colors.natural.transparent,
            gap: theme.spacing.sm,
          },
        ]}
      >
        {/* Sticky Blur Header Nav */}
        {isSticky && (
          <BlurView
            intensity={Platform.OS === "ios" ? 4 : 8}
            tint="light"
            style={[StyleSheet.absoluteFill]}
          />
        )}

        {/* Header Nav */}
        <HeaderNav
          title={isTabsSticky ? "Fabrica X" : ""}
          // hideNotice={isTabsSticky}
          onLayout={(e) => {
            headerNavHeight.current = e.nativeEvent.layout.height;
          }}
        />

        {/* Sticky Segmented Tabs */}
        {isTabsSticky && (
          <SegmentedTabs
            value={tab}
            onChange={setTab}
            style={{
              marginHorizontal: theme.spacing.md,
            }}
          />
        )}

        {isTabsSticky && (
          <LeaderboardHeader
            style={{
              marginHorizontal: theme.spacing.md,
            }}
          />
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
          }}
          style={{ paddingBottom: theme.spacing.sm }}
        />
        {/* Tab content */}
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
          {!isTabsSticky && (
            <SegmentedTabs
              value={tab}
              onChange={setTab}
              style={{
                marginHorizontal: theme.spacing.md,
              }}
            />
          )}
          {/* Tab content */}
          <View
            style={{
              paddingHorizontal: theme.spacing.md,
            }}
          >
            {tab === "leaderboard" && <LeaderboardSection />}
            {tab === "prizes" && <PrizesSection />}
          </View>
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
