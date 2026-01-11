import AnimatedDigit from "./AnimatedDigit";
import Label from "./Label";
import { useTheme } from "@/hooks/theme/useTheme";
import { ThemedView } from "@/components/Themed";

type Props = {
  size: number;
  value: number;
  label: string;
};

export default function CountdownUnit({ value, label, size }: Props) {
  const padded = String(value).padStart(2, "0");
  const theme = useTheme();

  return (
    <ThemedView
      style={[
        {
          alignItems: "center",
          paddingHorizontal: theme.spacing.sm,
          gap: theme.spacing.xs,
        },
      ]}
    >
      <ThemedView
        style={{
          height: size,
          aspectRatio: 1,
        }}
      >
        <ThemedView
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {padded.split("").map((d, i) => (
            <AnimatedDigit key={i} value={d} fontSize={size} />
          ))}
        </ThemedView>
      </ThemedView>
      <Label fontSize={size}>{label}</Label>
    </ThemedView>
  );
}
