import { Text, TextProps } from "../../../../Themed";
import { useTheme } from "@/hooks/useTheme";

export default function Label(props: TextProps) {
  const theme = useTheme();

  return (
    <Text
      {...props}
      style={[
        theme.typography.miniText,
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
