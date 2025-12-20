import { StyleSheet } from "react-native";
import { View, ViewProps } from "../../../../Themed";
import Separator from "./Separator";
import TimeUnit from "./TimeUnit";

export default function Timer({ style }: ViewProps) {
  return (
    <View style={[styles.container, style]}>
      <TimeUnit value="03" label="days" />
      <Separator />
      <TimeUnit value="10" label="hours" />
      <Separator />
      <TimeUnit value="20" label="min" />
      <Separator />
      <TimeUnit value="45" label="sec" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
