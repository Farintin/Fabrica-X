import { ThemedTextProps, ThemedText } from "@/components/Themed";
import { useTheme } from "@/hooks/theme/useTheme";

export default function Time(props: ThemedTextProps) {
  const theme = useTheme();

  return (
    <ThemedText
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
