import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";
import { LeaderboardRow } from "@/libs/api/leaderboardApi";
import { ThemedViewProps } from "@/components/Themed";

export type IconNameType =
  | "arrow-left"
  | "bell"
  | "link"
  | "live"
  | "user-octagon"
  | "location"
  | "duration"
  | "leaderboard"
  | "leaderboard-prize"
  | "voucher"
  | "gift"
  | "gift-prize"
  | "menu"
  | "setting"
  | "crown"
  | "ranking";

export type RankProps = TouchableOpacityProps & LeaderboardRow;

export type ContainerProps = ThemedViewProps & {
  wrapperStyle?: StyleProp<ViewStyle>;
};
