import { useTheme } from "@/src/hooks/useTheme";
import { Text } from "react-native";

export default function Article({ text }: { text: string }) {
  const theme = useTheme();

  return (
    <Text
      style={[
        {
          fontFamily: "Poppins-Medium",
          fontSize: 10,
          lineHeight: 15,
          letterSpacing: 0,
          color: "#fff",
          textAlign: "center",
        },
        { color: theme.colors.textPrimary },
      ]}
    >
      {text}
    </Text>
  );
}
