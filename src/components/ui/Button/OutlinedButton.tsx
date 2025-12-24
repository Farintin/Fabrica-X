import { useTheme } from "@/hooks/theme/useTheme";
import { ButtonProps } from "@/types/button";
import Button from "./Button";

export default function OutlinedButton({
  color,
  borderColor,
  style,
  ...restProps
}: ButtonProps & {
  borderColor?: string;
}) {
  const theme = useTheme();

  return (
    <Button
      style={[
        {
          backgroundColor: color || "transparent",
          borderColor: borderColor || theme.colors.natural.white,
          borderWidth: 1,
        },
        style,
      ]}
      labelColor={theme.colors.natural.white}
      {...restProps}
    />
  );
}
