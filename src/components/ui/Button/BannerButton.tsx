import SvgIcon from "@/components/ui/SvgIcon";
import { useTheme } from "@/hooks/theme/useTheme";
import { IconButtonProps } from "@/types/button";
import Button from "./Button";

export default function BannerButton({
  iconName,
  iconSize = 18,
  style,
  ...restProps
}: IconButtonProps) {
  const theme = useTheme();
  const iconColor = theme.colors.primary;

  return (
    <Button
      blurBackground={true}
      contentLeft={
        <SvgIcon name={iconName} size={iconSize} color={iconColor} />
      }
      style={[style]}
      {...restProps}
    />
  );
}
