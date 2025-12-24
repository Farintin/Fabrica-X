import { useTheme } from "@/hooks/theme/useTheme";
import Label from "./Label";
import Time from "./Time";
import { ThemedView, ThemedViewProps } from "@/components/Themed";

type TimeUnitProps = {
  value: string;
  label: string;
  style?: ThemedViewProps["style"];
};

export default function TimeUnit({ value, label }: TimeUnitProps) {
  const theme = useTheme();
  return (
    <ThemedView
      style={[
        {
          alignItems: "center",
          paddingHorizontal: theme.spacing.sm,
        },
      ]}
    >
      <Time>{value}</Time>
      <Label>{label}</Label>
    </ThemedView>
  );
}
