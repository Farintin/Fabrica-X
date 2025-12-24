// src/components/ui/Cards/LastRankPreviewCard.tsx
import { useTheme } from "@/hooks/theme/useTheme";
import { RankProps } from "@/types/ui/icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { Heading } from "../../typography/Heading";
import UserRankCardAvatar from "../Avatar/UserRankCardAvatar";
import { ThemedView, ThemedText } from "@/components/Themed";

export default function LastPreviewRankCard({
  avatarUrl,
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
      <ThemedView
        style={{
          alignItems: "center",
          gap: theme.spacing.xs,
        }}
      >
        <UserRankCardAvatar
          displayName={displayName}
          avatarUrl={avatarUrl}
          style={[
            {
              backgroundColor: "#808080",
            },
          ]}
        />
        <ThemedText style={[theme.typography.desc, { color: "#3A3A3C" }]}>
          {displayName}
        </ThemedText>
      </ThemedView>

      <ThemedView
        style={[
          {
            alignItems: "center",
            justifyContent: "center",
            gap: theme.spacing.sm + 4,
          },
        ]}
      >
        <ThemedText
          style={[
            theme.typography.h2,
            {
              color: theme.colors.background.base,
            },
          ]}
        >
          #{rank}
        </ThemedText>

        <ThemedText style={[theme.typography.desc, { color: "#808080" }]}>
          Rank
        </ThemedText>
      </ThemedView>

      <ThemedView
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
        <ThemedText style={[theme.typography.desc, { color: "#808080" }]}>
          pts
        </ThemedText>
      </ThemedView>
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
