// src/types/button.ts
import { StyleProp, TextStyle, TouchableOpacityProps } from "react-native";
import { IconNameType } from "./icons";

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

export type OutlinedButtonProps = ButtonProps & {
  borderColor?: string;
};
