import { ThemedText, ThemedTextProps } from "@/components/Themed";
import { useTheme } from "@/hooks/theme/useTheme";

export function Body(props: ThemedTextProps) {
  const theme = useTheme();
  return <ThemedText {...props} style={[theme.typography.body, props.style]} />;
}
