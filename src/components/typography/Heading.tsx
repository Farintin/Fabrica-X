import { Text, TextProps } from "@/src/components/Themed";
import { useTheme } from "@/src/hooks/useTheme";

type HeadingProps = TextProps & {
  align?: "left" | "center" | "right";
  spaced?: boolean;
  tone?: "primary" | "secondary" | "white";
};

export function Heading({
  align = "left",
  spaced = false,
  tone = "primary",
  style,
  ...props
}: HeadingProps) {
  const theme = useTheme();

  return (
    <Text
      {...props}
      style={[
        theme.typography.heading,
        { textAlign: align },
        spaced && { marginVertical: theme.spacing.xs },
        tone === "primary" && { color: theme.colors.textPrimary },
        tone === "secondary" && { color: theme.colors.textSecondary },
        tone === "white" && { color: theme.colors.natural.white },
        style,
      ]}
    />
  );
}
