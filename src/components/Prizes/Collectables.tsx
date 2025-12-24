import { useTheme } from "@/hooks/theme/useTheme";
import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/Themed";
import { Heading } from "@/components/typography/Heading";
import PointCard from "@/components/ui/Cards/PointCard";

export default function Collectables() {
  const theme = useTheme();
  return (
    <ThemedView style={{ gap: theme.spacing.sm }}>
      <Heading>Type of Collectibles</Heading>
      <ThemedView
        style={[
          styles.row,
          {
            gap: theme.spacing.sm,
          },
        ]}
      >
        <PointCard
          title="Innovation"
          desc="The situations that reshaping fashion’s future"
          point={15}
          style={[styles.rowItem]}
        />
        <PointCard
          title="Issues"
          desc="The problems hidden among the treasure"
          point={0}
          style={[styles.rowItem]}
        />
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
