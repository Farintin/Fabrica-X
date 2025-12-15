import OutlineButton from "@/src/components/ui/Button/ButtonOutlined";
import { useTheme } from "@/src/hooks/useTheme";
import { FlatList, View, Text, ViewProps } from "react-native";
import { LastRankTypeCard, RankTypeCard } from "./cards";
import Button from "@/src/components/ui/Button/Button";

const data = Array.from({ length: 20 }).map((_, i: number) => ({
  id: String(i),
  name: "Etta",
  points: 300 - i * 10,
  rank: i + 1,
}));

const LeaderboardList = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      scrollEnabled={false} // 👈 IMPORTANT
      renderItem={({ item }) => {
        return <RankTypeCard {...item} />;
      }}
    />
  );
};

export const LeaderboardHeader = ({ style }: ViewProps) => {
  const theme = useTheme();
  const lastRank = data?.at(-1);

  return (
    <View style={[style]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: theme.spacing.md,
        }}
      >
        <Text
          style={{
            ...theme.typography.heading,
            color: theme.colors.textPrimary,
          }}
        >
          Leaderboard
        </Text>
        <OutlineButton label="View more" size="small" />
      </View>
      {lastRank && <LastRankTypeCard {...lastRank} />}
    </View>
  );
};

export default function LeaderboardSection() {
  const theme = useTheme();

  return (
    <View style={{ paddingVertical: 0, gap: theme.spacing.sm }}>
      <LeaderboardHeader />
      <LeaderboardList />
      <Button
        label="View All"
        style={{
          alignSelf: "center",
          paddingVertical: theme.spacing.sm + 6,
          paddingHorizontal: theme.spacing.lg,
        }}
        labelStyle={[
          theme.typography.buttonLarge,
          { textTransform: "uppercase" },
        ]}
      />
    </View>
  );
}
