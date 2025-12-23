import { View, ViewProps } from "../../../../Themed";
import { useTheme } from "@/hooks/useTheme";
import Label from "./Label";
import Time from "./Time";

type TimeUnitProps = {
  value: string;
  label: string;
  style?: ViewProps["style"];
};

export default function TimeUnit({ value, label }: TimeUnitProps) {
  const theme = useTheme();
  return (
    <View
      style={[
        {
          alignItems: "center",
          paddingHorizontal: theme.spacing.sm,
        },
      ]}
    >
      <Time>{value}</Time>
      <Label>{label}</Label>
    </View>
  );
}
