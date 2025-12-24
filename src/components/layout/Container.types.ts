import { StyleProp, ViewStyle } from "react-native";
import { ThemedViewProps } from "../Themed";

export type ContainerProps = ThemedViewProps & {
  wrapperStyle?: StyleProp<ViewStyle>;
};
