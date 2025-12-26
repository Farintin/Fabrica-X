// src/components/Prizes/Prizes.tsx
import { useTheme } from "@/hooks/theme/useTheme";
import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/Themed";
import { Heading } from "@/components/typography/Heading";
import PrizeCard from "@/components/ui/Cards/PrizeCard";
import Animated from "react-native-reanimated";
import { slideInFromRight } from "@/components/Tabs/SegmentedTabs/animations";
import { PrizeItem } from "../ui/Cards/Card.types";

const PRIZES: PrizeItem[] = [
  {
    source: require("@/assets/images/1st Place Prize.png"),
    iconName: "leaderboard-prize",
    levelText: "1st Place Prize",
    infoText: "Sustainable Goodie Bag",
    size: "large",
  },
  {
    source: require("@/assets/images/Runners Up x 4.png"),
    iconName: "gift-prize",
    levelText: "Runners Up x 4",
    infoText: "Surprise Gift",
  },
  {
    source: require("@/assets/images/coffee.png"),
    iconName: "leaderboard-prize",
    levelText: "All Participants",
    infoText: "50% OFF Café",
  },
];

export default function Prizes() {
  const theme = useTheme();
  return (
    <ThemedView style={{ gap: theme.spacing.sm }}>
      <Heading>What Can You Expect</Heading>
      <ThemedView style={[styles.row, { gap: theme.spacing.sm }]}>
        {PRIZES.map(({ size, ...cardProps }, index) => (
          <Animated.View
            key={cardProps.levelText}
            entering={slideInFromRight(index, 0)}
            style={[
              styles.rowItem,
              size === "large" ? { width: "100%" } : undefined,
            ]}
          >
            <PrizeCard {...cardProps} />
          </Animated.View>
        ))}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  rowItem: { flexGrow: 1 },
});
