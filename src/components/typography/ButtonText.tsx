import { ThemedText, ThemedTextProps } from "@/components/Themed";
import { useTheme } from "@/hooks/theme/useTheme";

export function ButtonText(props: ThemedTextProps) {
  const theme = useTheme();

  return (
    <ThemedText
      {...props}
      style={[
        theme.typography.button,
        { textTransform: "capitalize" },
        props.style,
      ]}
    />
  );
}
