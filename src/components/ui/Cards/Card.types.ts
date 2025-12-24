// src/types/card.ts
import { ImageBackgroundProps } from "react-native";
import { ThemedViewProps } from "@/components/Themed";
import { IconNameType } from "@/types/ui/icons";

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
