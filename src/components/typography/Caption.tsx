import { ThemedText, ThemedTextProps } from "@/components/Themed";
import { useTheme } from "@/hooks/theme/useTheme";

export function Caption(props: ThemedTextProps) {
  const theme = useTheme();
  return <ThemedText {...props} style={[theme.typography.mini, props.style]} />;
}
