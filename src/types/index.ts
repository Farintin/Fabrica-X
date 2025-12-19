import {
  StyleProp,
  TouchableOpacityProps,
  ViewProps,
  ViewStyle,
} from "react-native";
import { LeaderboardUser } from "../libs/api/leaderboardApi";

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

export type RankProps = Omit<TouchableOpacityProps, "id"> & // Remove the string 'id'
  Omit<LeaderboardUser, "id"> & {
    // Remove the numeric 'id'
    userId: number; // Define the unambiguous numeric ID
    // The rest of the fields (name, points, rank, etc.) are implicitly included
    // from LeaderboardUser and TouchableOpacityProps
  };

export type ContainerProps = ViewProps & {
  wrapperStyle?: StyleProp<ViewStyle>;
};
