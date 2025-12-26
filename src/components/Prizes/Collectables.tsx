// src/components/Prizes/Collectables.tsx
import { useTheme } from "@/hooks/theme/useTheme";
import { LayoutChangeEvent, StyleSheet } from "react-native";
import { ThemedView } from "@/components/Themed";
import { Heading } from "@/components/typography/Heading";
import PointCard from "@/components/ui/Cards/PointCard";
import { slideInFromRight } from "../Tabs/SegmentedTabs/animations";
import Animated from "react-native-reanimated";
import { CollectibleItem } from "../ui/Cards/Card.types";
import { useState } from "react";

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
  {
    title: "Issues sample2",
    desc: "The problems hidden among the treasure",
    point: 0,
  },
];

export default function Collectables() {
  const [itemWidth, setItemWidth] = useState(0);
  const theme = useTheme();
  const gap = theme.spacing.sm;

  const COLUMNS = 2;
  const onLayout = (e: LayoutChangeEvent) => {
    const w = Math.floor(
      (e.nativeEvent.layout.width - gap * (COLUMNS - 1)) / COLUMNS
    );
    setItemWidth((prev) => (prev !== w ? w : prev));
  };

  return (
    <ThemedView style={{ gap }}>
      <Heading>Type of Collectibles</Heading>
      <ThemedView onLayout={onLayout} style={[styles.row, { gap }]}>
        {itemWidth > 0 &&
          COLLECTIBLES.map((item, index) => (
            <Animated.View
              key={item.title}
              entering={slideInFromRight(index, 1000)}
              style={{
                width: itemWidth,
              }}
            >
              <PointCard {...item} style={{ flex: 1 }} />
            </Animated.View>
          ))}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "stretch",
    flexWrap: "wrap",
  },
});
