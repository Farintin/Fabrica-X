import { Text, TextProps } from "@/components/Themed";
import { useTheme } from "@/hooks/useTheme";

export function Body(props: TextProps) {
  const theme = useTheme();
  return <Text {...props} style={[theme.typography.bodyText, props.style]} />;
}
