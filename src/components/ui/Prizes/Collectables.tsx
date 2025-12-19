import { useTheme } from "@/src/hooks/useTheme";
import { View, Text } from "react-native";
import PointCard from "../Cards/PointCard";

export default function Collectables() {
  const theme = useTheme();
  return (
    <View style={{ gap: theme.spacing.sm }}>
      <Text
        style={{
          ...theme.typography.heading,
          color: theme.colors.textPrimary,
        }}
      >
        Type of Collectibles
      </Text>
      <View
        style={{
          flexDirection: "row",
          gap: theme.spacing.sm,
        }}
      >
        <PointCard
          title="Innovation"
          desc="The situations that reshaping fashion’s future"
          point={15}
        />
        <PointCard
          title="Issues"
          desc="The problems hidden among the treasure"
          point={0}
        />
      </View>
    </View>
  );
}
