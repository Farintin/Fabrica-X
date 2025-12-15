import { ViewProps, ImageBackgroundProps } from "react-native";
import { IconNameType } from ".";

export type PrizeCardProps = ImageBackgroundProps & {
  iconName: IconNameType;
  levelText: string;
  infoText: string;
};

export type PointCardProps = ViewProps & {
  title: string;
  desc: string;
  point: number;
};
