import { Text, TextProps } from "@/components/Themed";
import { useTheme } from "@/hooks/useTheme";

export function Caption(props: TextProps) {
  const theme = useTheme();
  return <Text {...props} style={[theme.typography.miniText, props.style]} />;
}
