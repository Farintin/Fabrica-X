import { useTheme } from "@/hooks/theme/useTheme";
import PointsButton from "../Button/PointsButton";
import { ThemedView, ThemedText } from "@/components/Themed";
import { CollectibleItem } from "./Card.types";

export default function PointCard({
  title,
  desc,
  point,
  style,
}: CollectibleItem) {
  const theme = useTheme();

  return (
    <ThemedView
      style={[
        {
          backgroundColor: "#808080",
          borderRadius: theme.radius.md,
          paddingHorizontal: theme.spacing.base,
          paddingVertical: theme.spacing.lg,
          gap: theme.spacing.base,
          justifyContent: "space-between",
        },
        style,
      ]}
    >
      <ThemedView
        style={[
          {
            gap: theme.spacing.base,
          },
          style,
        ]}
      >
        <ThemedText
          style={[theme.typography.heading, { color: theme.colors.primary }]}
        >
          {title}
        </ThemedText>
        <ThemedText style={[theme.typography.desc, { color: "#E6E6E6" }]}>
          {desc}
        </ThemedText>
      </ThemedView>
      <PointsButton point={point} style={{ alignSelf: "flex-end" }} />
    </ThemedView>
  );
}
