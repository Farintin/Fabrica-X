import { Text, TextProps } from "../../../../Themed";
import { useTheme } from "@/src/hooks/useTheme";

export default function Time(props: TextProps) {
  const theme = useTheme();

  return (
    <Text
      {...props}
      style={[
        theme.typography.timerValue,
        {
          color: theme.colors.natural.white,
        },
        props.style,
      ]}
    />
  );
}
