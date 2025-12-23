import {
  StyleProp,
  TouchableOpacityProps,
  ViewProps,
  ViewStyle,
} from "react-native";
import { LeaderboardRow } from "@/libs/api/leaderboardApi";

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

export type ContainerProps = ViewProps & {
  wrapperStyle?: StyleProp<ViewStyle>;
};
