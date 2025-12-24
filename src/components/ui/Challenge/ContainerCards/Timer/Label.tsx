import { ThemedTextProps, ThemedText } from "@/components/Themed";
import { useTheme } from "@/hooks/theme/useTheme";

export default function Label(props: ThemedTextProps) {
  const theme = useTheme();

  return (
    <ThemedText
      {...props}
      style={[
        theme.typography.mini,
        {
          color: "rgba(245, 245, 245, .7)",
          textAlign: "center",
          textTransform: "capitalize",
          lineHeight: 10,
        },
        props.style,
      ]}
    />
  );
}
