// src/components/Prizes/Collectables.tsx
import { useTheme } from "@/hooks/theme/useTheme";
import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/Themed";
import { Heading } from "@/components/typography/Heading";
import PointCard from "@/components/ui/Cards/PointCard";
import { slideInFromRight } from "../Tabs/SegmentedTabs/animations";
import Animated from "react-native-reanimated";
import { CollectibleItem } from "../ui/Cards/Card.types";

const COLLECTIBLES: CollectibleItem[] = [
  {
    title: "Innovation",
    desc: "The situations that reshaping fashion’s future",
    point: 15,
  },
  {
    title: "Issues",
    desc: "The problems hidden among the treasure",
    point: 0,
  },
];

export default function Collectables() {
  const theme = useTheme();
  return (
    <ThemedView style={{ gap: theme.spacing.sm }}>
      <Heading>Type of Collectibles</Heading>
      <ThemedView style={[styles.row, { gap: theme.spacing.sm }]}>
        {COLLECTIBLES.map((item, index) => (
          <Animated.View
            key={item.title}
            entering={slideInFromRight(index, 1000)} // ← waits until prizes finish
            style={styles.rowItem}
          >
            <PointCard {...item} />
          </Animated.View>
        ))}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  rowItem: { flex: 1 },
});
