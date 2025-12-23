import { Text, TextProps } from "@/components/Themed";
import { useTheme } from "@/hooks/useTheme";

export default function Article(props: TextProps) {
  const theme = useTheme();

  return (
    <Text
      {...props}
      style={[
        theme.typography.miniText,
        { color: theme.colors.textPrimary, textAlign: "center" },
        props.style,
      ]}
    />
  );
}
