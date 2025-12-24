import { ThemedText, ThemedTextProps } from "@/components/Themed";
import { useTheme } from "@/hooks/theme/useTheme";

export default function Article(props: ThemedTextProps) {
  const theme = useTheme();

  return (
    <ThemedText
      {...props}
      style={[
        theme.typography.mini,
        { color: theme.colors.textPrimary, textAlign: "center" },
        props.style,
      ]}
    />
  );
}
