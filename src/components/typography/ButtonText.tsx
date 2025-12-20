import { Text, TextProps } from "@/src/components/Themed";
import { useTheme } from "@/src/hooks/useTheme";

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
