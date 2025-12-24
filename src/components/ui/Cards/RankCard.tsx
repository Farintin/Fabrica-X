// src/components/ui/Cards/RankCard.tsx
import { useTheme } from "@/hooks/theme/useTheme";
import { Image } from "expo-image";
import { StyleSheet, TouchableOpacity } from "react-native";
import { RankProps } from "@/types/ui/icons";
import { Heading } from "../../typography/Heading";
import UserRankCardAvatar from "../Avatar/UserRankCardAvatar";
import { ThemedView, ThemedText } from "@/components/Themed";

const rankOneImage = require("@/assets/images/rank-one-image.png");
const rankTwoImage = require("@/assets/images/rank-two-image.png");
const rankThreeImage = require("@/assets/images/rank-three-image.png");

export default function RankCard({
  avatarUrl,
  displayName,
  points,
  rank,
  style,
}: RankProps) {
  const theme = useTheme();

  const rankStyles = {
    1: { surfaceColor: "#C2F9B7" },
    2: { surfaceColor: "#DFFCDA" },
    3: { surfaceColor: "#E6E6E6" },
  };
  const rankImages = {
    1: rankOneImage,
    2: rankTwoImage,
    3: rankThreeImage,
  };

  function isRankTop3(key: number): key is keyof typeof rankStyles {
    return key in rankStyles;
  }
  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: isRankTop3(rank)
            ? rankStyles[rank].surfaceColor
            : "#232527",
          borderRadius: theme.radius.md,
          padding: theme.spacing.base,
          marginBottom: theme.spacing.sm + 2,
        },
        style,
      ]}
    >
      <ThemedView
        style={[
          {
            width: 32,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        {isRankTop3(rank) ? (
          <Image
            source={rankImages[rank]}
            contentFit="contain"
            style={{ width: 28, aspectRatio: 1 }}
          />
        ) : (
          <Heading tone="white">{rank}</Heading>
        )}
      </ThemedView>
      <ThemedView
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
          marginHorizontal: theme.spacing.base,
          gap: theme.spacing.sm,
        }}
      >
        <UserRankCardAvatar displayName={displayName} avatarUrl={avatarUrl} />
        <ThemedText
          style={[
            theme.typography.desc,
            { color: rank <= 3 ? "#3A3A3C" : theme.colors.natural.white },
          ]}
        >
          {displayName}
        </ThemedText>
      </ThemedView>
      <ThemedView
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: theme.spacing.xs + 2,
          marginHorizontal: theme.spacing.xs,
        }}
      >
        <Heading
          tone="white"
          style={[
            {
              color:
                rank <= 3
                  ? theme.colors.background.base
                  : theme.colors.natural.white,
            },
          ]}
        >
          {points}
        </Heading>
        <ThemedText
          style={[
            theme.typography.desc,
            { color: rank <= 3 ? "#808080" : "rgba(255, 255, 255, .55)" },
          ]}
        >
          pts
        </ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
