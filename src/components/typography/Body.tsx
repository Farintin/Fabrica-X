import { Text, TextProps } from "@/src/components/Themed";
import { useTheme } from "@/src/hooks/useTheme";

export function Body(props: TextProps) {
  const theme = useTheme();
  return <Text {...props} style={[theme.typography.bodyText, props.style]} />;
}
