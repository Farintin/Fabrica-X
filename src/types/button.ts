import { StyleProp, TextStyle, TouchableOpacityProps } from "react-native";
import { IconNameType } from ".";

export type ButtonProps = TouchableOpacityProps & {
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  contentLeft?: any;
  contentRight?: any;
};

export type IconButtonProps = ButtonProps & {
  iconName: IconNameType;
  iconSize?: number;
  iconColor?: string;
};

export type PointsButtonProps = ButtonProps & {
  point: number;
};
