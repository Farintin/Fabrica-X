import { useTheme } from "@/src/hooks/useTheme";
import { View, ViewProps } from "react-native";

export default function Highlight({ children, style }: ViewProps) {
  const theme = useTheme();

  return (
    <View
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
    </View>
  );
}
