import { LeaderboardUser, UserPoints } from "@/src/api/leaderboardApi";
import { useTheme } from "@/src/hooks/useTheme";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

const rankOneImage = require("@/assets/images/rank-one-image.png");
const rankTwoImage = require("@/assets/images/rank-two-image.png");
const rankThreeImage = require("@/assets/images/rank-three-image.png");

export type RankTypeProps = Omit<TouchableOpacityProps, "id"> & // Remove the string 'id'
  Omit<LeaderboardUser, "id"> & {
    // Remove the numeric 'id'
    userId: number; // Define the unambiguous numeric ID
    // The rest of the fields (name, points, rank, etc.) are implicitly included
    // from LeaderboardUser and TouchableOpacityProps
  };

export const RankTypeCard = ({
  userId,
  name,
  points,
  rank,
  style,
  ...touchableProps
}: RankTypeProps) => {
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
      {...touchableProps}
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
};

export const LastRankTypeCard = ({
  userId,
  name,
  points,
  rank,
  style,
}: RankTypeProps) => {
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
        <Text style={[theme.typography.desc, { color: "#3A3A3C" }]}>
          {name}
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
        <Text
          style={[
            theme.typography.heading,
            {
              color: theme.colors.background.base,
            },
          ]}
        >
          {points.allTime}
        </Text>
        <Text style={[theme.typography.desc, { color: "#808080" }]}>pts</Text>
      </View>
    </LinearGradient>
  );
};

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
