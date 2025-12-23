import { useTheme } from "@/hooks/useTheme";
import { RankProps } from "@/types";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet } from "react-native";
import { Heading } from "../../typography/Heading";

export default function LastRankPreviewCard({
  displayName,
  points,
  rank,
  style,
}: RankProps) {
  const theme = useTheme();
  return (
    <LinearGradient
      colors={["#97FF48", "#C2F9B7"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[
        styles.card,
        {
          borderRadius: theme.radius.md,
          padding: theme.spacing.lg,
          paddingVertical: theme.spacing.lg,
          marginBottom: theme.spacing.xs,
        },
        style,
      ]}
    >
      <View
        style={{
          alignItems: "center",
          gap: theme.spacing.xs,
        }}
      >
        <View
          style={[
            styles.avatar,
            {
              backgroundColor: "#808080",
              borderRadius: theme.radius.pill,
            },
          ]}
        >
          <Heading tone="white" style={[styles.nameAvatar]}>
            {displayName.substring(0, 2)}
          </Heading>
        </View>
        <Text style={[theme.typography.desc, { color: "#3A3A3C" }]}>
          {displayName}
        </Text>
      </View>

      <View
        style={[
          {
            alignItems: "center",
            justifyContent: "center",
            gap: theme.spacing.sm + 4,
          },
        ]}
      >
        <Text
          style={[
            theme.typography.h2,
            {
              color: theme.colors.background.base,
            },
          ]}
        >
          #{rank}
        </Text>

        <Text style={[theme.typography.desc, { color: "#808080" }]}>Rank</Text>
      </View>

      <View
        style={{
          alignItems: "center",
          gap: theme.spacing.sm + 4,
          marginHorizontal: theme.spacing.xs,
        }}
      >
        <Heading
          style={[
            {
              color: theme.colors.background.base,
            },
          ]}
        >
          {points}
        </Heading>
        <Text style={[theme.typography.desc, { color: "#808080" }]}>pts</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: 42,
    aspectRatio: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  nameAvatar: { textTransform: "uppercase" },
});
