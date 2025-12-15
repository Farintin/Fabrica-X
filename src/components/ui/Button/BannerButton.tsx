import SvgIcon from "@/components/ui/SvgIcon";
import { useTheme } from "@/src/hooks/useTheme";
import { IconButtonProps } from "@/src/types/button";
import Button from "./Button";

export default function BannerButton({
  iconName,
  iconSize = 18,
  ...restProps
}: IconButtonProps) {
  const theme = useTheme();
  const iconColor = theme.colors.primary;

  return (
    <Button
      contentLeft={
        <SvgIcon name={iconName} size={iconSize} color={iconColor} />
      }
      {...restProps}
    />
  );
}
