// src/types/card.ts
import { ImageBackgroundProps } from "react-native";
import { ThemedViewProps } from "@/components/Themed";
import { IconNameType } from "@/types/ui/icons";

export type PrizeItem = ImageBackgroundProps & {
  iconName: IconNameType;
  levelText: string;
  infoText: string;
  size?: "large" | "small";
};

export type CollectibleItem = ThemedViewProps & {
  title: string;
  desc: string;
  point: number;
};
