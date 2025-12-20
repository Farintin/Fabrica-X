import { Text, TextProps } from "@/src/components/Themed";
import { useTheme } from "@/src/hooks/useTheme";

export function Caption(props: TextProps) {
  const theme = useTheme();
  return <Text {...props} style={[theme.typography.miniText, props.style]} />;
}
