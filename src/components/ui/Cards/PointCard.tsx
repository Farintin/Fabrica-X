import { PointCardProps } from "@/types/card";
import { useTheme } from "@/hooks/useTheme";
import PointsButton from "../Button/PointsButton";
import { View, Text } from "../../Themed";

export default function PointCard({
  title,
  desc,
  point,
  style,
}: PointCardProps) {
  const theme = useTheme();

  return (
    <View
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
      <View
        style={[
          {
            gap: theme.spacing.base,
          },
          style,
        ]}
      >
        <Text
          style={[theme.typography.heading, { color: theme.colors.primary }]}
        >
          {title}
        </Text>
        <Text style={[theme.typography.desc, { color: "#E6E6E6" }]}>
          {desc}
        </Text>
      </View>
      <PointsButton point={point} style={{ alignSelf: "flex-end" }} />
    </View>
  );
}
