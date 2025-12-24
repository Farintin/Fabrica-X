import { useTheme } from "@/hooks/theme/useTheme";
import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/Themed";
import { Heading } from "@/components/typography/Heading";
import PrizeCard from "@/components/ui/Cards/PrizeCard";

export default function Prizes() {
  const theme = useTheme();
  return (
    <ThemedView style={{ gap: theme.spacing.sm }}>
      <Heading>What Can You Expect</Heading>
      <PrizeCard
        source={require("@/assets/images/1st Place Prize.png")}
        iconName="leaderboard-prize"
        levelText="1st Place Prize"
        infoText="Sustainable Goodie Bag"
      />
      <ThemedView
        style={[
          styles.row,
          {
            gap: theme.spacing.sm,
          },
        ]}
      >
        <PrizeCard
          source={require("@/assets/images/Runners Up x 4.png")}
          iconName="gift-prize"
          levelText="Runners Up x 4"
          infoText="Surprise Gift"
          style={[styles.rowItem]}
        />
        <PrizeCard
          source={require("@/assets/images/coffee.png")}
          iconName="leaderboard-prize"
          levelText="All Participants"
          infoText="50% OFF Café"
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
  rowItem: { flexGrow: 1 },
});
