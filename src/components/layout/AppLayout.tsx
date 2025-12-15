import { View, StyleSheet, ScrollView } from "react-native";
import { useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeaderNav from "@/src/components/ui/HeaderNav";
import Challenge from "@/components/ui/Challenge";
import { useTheme } from "@/src/hooks/useTheme";

export default function AppLayout() {
  const challengeY = useRef(0);
  const headerNavHeight = useRef(0);
  const theme = useTheme();
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.root,
        {
          backgroundColor: theme.colors.natural.black,
        },
      ]}
    >
      {/* Overlay header */}
      <View
        style={[
          styles.stickyTabs,
          {
            paddingTop: top,
            paddingBottom: theme.spacing.md,
            gap: theme.spacing.sm,
          },
        ]}
      >
        {/* Header Nav */}
        <HeaderNav
          onLayout={(e) => {
            headerNavHeight.current = e.nativeEvent.layout.height;
          }}
        />
      </View>

      {/* SCROLLABLE content */}
      <ScrollView
        scrollEventThrottle={16}
        style={[styles.scroll]}
        showsVerticalScrollIndicator={false}
      >
        <Challenge
          onLayout={(e) => {
            challengeY.current = e.nativeEvent.layout.y;
          }}
          style={{ paddingBottom: theme.spacing.sm }}
        />
        {/* Tab content */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
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
