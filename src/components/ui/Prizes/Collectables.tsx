import { useTheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";
import PointCard from "../Cards/PointCard";
import { Heading } from "../../typography/Heading";
import { View } from "../../Themed";

export default function Collectables() {
  const theme = useTheme();
  return (
    <View style={{ gap: theme.spacing.sm }}>
      <Heading>Type of Collectibles</Heading>
      <View
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  rowItem: { flex: 1 },
});
