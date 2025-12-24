import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";
import { ThemedViewProps } from "@/components/Themed";
import { LeaderboardRow } from "./leaderboard";

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
