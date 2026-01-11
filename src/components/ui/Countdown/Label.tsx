import { ThemedTextProps, ThemedText } from "@/components/Themed";
import { useTheme } from "@/hooks/theme/useTheme";

type LabelProps = ThemedTextProps & {
  fontSize: number;
};
export default function Label({ fontSize, style, ...restProps }: LabelProps) {
  const theme = useTheme();
  fontSize = Math.floor(fontSize / 2.7);
  return (
    <ThemedText
      style={[
        theme.typography.mini,
        {
          color: "rgba(245, 245, 245, .7)",
          textAlign: "center",
          textTransform: "capitalize",
          fontSize,
          lineHeight: fontSize + Math.floor(fontSize / 32),
        },
        style,
      ]}
      {...restProps}
    />
  );
}
