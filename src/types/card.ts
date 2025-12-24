import { ImageBackgroundProps } from "react-native";
import { IconNameType } from ".";
import { ThemedViewProps } from "@/components/Themed";

export type PrizeCardProps = ImageBackgroundProps & {
  iconName: IconNameType;
  levelText: string;
  infoText: string;
};

export type PointCardProps = ThemedViewProps & {
  title: string;
  desc: string;
  point: number;
};
