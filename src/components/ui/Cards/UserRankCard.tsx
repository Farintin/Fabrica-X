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
import RankCard from "./RankCard";

export default function UserRankCard({ style, ...restProps }: RankProps) {
  return (
    <RankCard
      style={{
        backgroundColor: "#3A3A3C",
        borderStyle: "dashed",
        borderColor: "#C2F9B7",
        borderWidth: 1,
      }}
      {...restProps}
    />
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
