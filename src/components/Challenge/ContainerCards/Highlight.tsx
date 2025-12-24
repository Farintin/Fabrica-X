import { ThemedViewProps, ThemedView } from "@/components/Themed";
import { useTheme } from "@/hooks/theme/useTheme";

export default function Highlight({ children, style }: ThemedViewProps) {
  const theme = useTheme();

  return (
    <ThemedView
      style={[
        {
          alignItems: "center",
          paddingHorizontal: theme.spacing.sm + 4,
          gap: theme.spacing.sm,
        },
        style,
      ]}
    >
      {children}
    </ThemedView>
  );
}
