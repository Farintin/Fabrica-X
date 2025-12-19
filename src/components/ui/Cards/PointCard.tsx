import { PointCardProps } from "@/src/types/card";
import { View, Text } from "react-native";
import { useTheme } from "@/src/hooks/useTheme";
import PointsButton from "../Button/PointsButton";

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
          paddingHorizontal: theme.spacing.md,
          paddingVertical: theme.spacing.lg,
          gap: theme.spacing.md,
          flexShrink: 1,
          justifyContent: "space-between",
        },
        style,
      ]}
    >
      <View
        style={[
          {
            gap: theme.spacing.md,
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
