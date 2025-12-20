import { StyleProp, TextStyle, TouchableOpacityProps } from "react-native";
import { IconNameType } from ".";

export type ButtonProps = TouchableOpacityProps & {
  label?: string;
  color?: string;
  labelColor?: string;
  labelStyle?: StyleProp<TextStyle>;
  contentLeft?: any;
  contentRight?: any;
  size?: "small" | "large";
  blurBackground?: boolean;
};

export type IconButtonProps = ButtonProps & {
  iconName: IconNameType;
  iconSize?: number;
  iconColor?: string;
};

export type PointsButtonProps = ButtonProps & {
  point: number;
};

export type OutlinedButtonProps = ButtonProps & {
  borderColor?: string;
};
