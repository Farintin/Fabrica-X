import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";

export type ButtonProps = TouchableOpacityProps & {
  label?: string;
};

export type IconButtonProps = ButtonProps & {
  iconName:
    | "arrow-left"
    | "bell"
    | "link"
    | "live"
    | "user-octagon"
    | "location"
    | "duration"
    | "leaderboard"
    | "voucher"
    | "gift";
  iconSize?: number;
  iconColor?: string;
};

export type PointsButtonProps = ButtonProps & {
  point: number;
};
