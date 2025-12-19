import { LeaderboardUser } from "@/src/libs/api/leaderboardApi";
import { useTheme } from "@/src/hooks/useTheme";
import { Image } from "expo-image";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { RankProps } from "@/src/types";

const rankOneImage = require("@/assets/images/rank-one-image.png");
const rankTwoImage = require("@/assets/images/rank-two-image.png");
const rankThreeImage = require("@/assets/images/rank-three-image.png");

export default function RankCard({
  userId,
  name,
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
          padding: theme.spacing.md,
          marginBottom: theme.spacing.sm + 2,
        },
        style,
      ]}
    >
      <View
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
          <Text
            style={[
              theme.typography.heading,
              {
                color: theme.colors.natural.white,
              },
            ]}
          >
            {rank}
          </Text>
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
          marginHorizontal: theme.spacing.md,
          gap: theme.spacing.sm,
        }}
      >
        <View
          style={[
            styles.avatar,
            {
              backgroundColor: "#A0A0A7",
              borderRadius: theme.radius.pill,
            },
          ]}
        >
          <Text
            style={[
              styles.nameAvatar,
              theme.typography.heading,
              { color: theme.colors.natural.white },
            ]}
          >
            {name.substring(0, 2)}
          </Text>
        </View>
        <Text
          style={[
            theme.typography.desc,
            { color: rank <= 3 ? "#3A3A3C" : theme.colors.natural.white },
          ]}
        >
          {name}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: theme.spacing.xs + 2,
          marginHorizontal: theme.spacing.xs,
        }}
      >
        <Text
          style={[
            theme.typography.heading,
            {
              color:
                rank <= 3
                  ? theme.colors.background.base
                  : theme.colors.natural.white,
            },
          ]}
        >
          {points.allTime}
        </Text>
        <Text
          style={[
            theme.typography.desc,
            { color: rank <= 3 ? "#808080" : "rgba(255, 255, 255, .55)" },
          ]}
        >
          pts
        </Text>
      </View>
    </TouchableOpacity>
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
