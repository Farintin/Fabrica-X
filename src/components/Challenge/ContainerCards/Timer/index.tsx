import { StyleSheet } from "react-native";
import Separator from "./Separator";
import TimeUnit from "./TimeUnit";
import { ThemedView, ThemedViewProps } from "@/components/Themed";

export default function Timer({ style }: ThemedViewProps) {
  return (
    <ThemedView style={[styles.container, style]}>
      <TimeUnit value="03" label="days" />
      <Separator />
      <TimeUnit value="10" label="hours" />
      <Separator />
      <TimeUnit value="20" label="min" />
      <Separator />
      <TimeUnit value="45" label="sec" />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
