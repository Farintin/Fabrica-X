import { Text, TextProps } from "@/components/Themed";
import { useTheme } from "@/hooks/useTheme";

export function ButtonText(props: TextProps) {
  const theme = useTheme();

  return (
    <Text
      {...props}
      style={[
        theme.typography.button,
        { textTransform: "capitalize" },
        props.style,
      ]}
    />
  );
}
