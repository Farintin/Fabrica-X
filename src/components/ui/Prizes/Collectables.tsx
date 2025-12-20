import { useTheme } from "@/src/hooks/useTheme";
import { View } from "react-native";
import PointCard from "../Cards/PointCard";
import { Heading } from "../../typography/Heading";

export default function Collectables() {
  const theme = useTheme();
  return (
    <View style={{ gap: theme.spacing.sm }}>
      <Heading>Type of Collectibles</Heading>
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
