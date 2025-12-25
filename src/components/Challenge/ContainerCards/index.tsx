// src/components/Challenge/ContainerCards.tsx
import { useTheme } from "@/hooks/theme/useTheme";
import { ThemedView } from "@/components/Themed";
import { ThemedViewProps } from "@/components/Themed/ThemedView";
import AnimatedAwardCard from "./Cards/AnimatedAwardCard";
import AnimatedCountdownCard from "./Cards/AnimatedCountdownCard";
import AnimatedGroupButtonCard from "./Cards/AnimatedGroupButtonCard";

export default function ContainerCards({ style }: ThemedViewProps) {
  const theme = useTheme();

  return (
    <ThemedView
      style={[
        {
          alignItems: "center",
          paddingHorizontal: theme.spacing.base,
          gap: theme.spacing.sm,
        },
        style,
      ]}
    >
      <AnimatedAwardCard />

      <AnimatedGroupButtonCard />

      <AnimatedCountdownCard />
    </ThemedView>
  );
}
