import { useTheme } from "@/hooks/theme/useTheme";
import { PointsButtonProps } from "@/types/button";
import OutlinedButton from "@/components/ui/Button/OutlinedButton";

const PointsButton: React.FC<PointsButtonProps> = ({
  point,
  style,
  ...restProps
}) => {
  const theme = useTheme();

  return (
    <OutlinedButton
      label={`${point} point`}
      color="#CDCDCD33"
      borderColor={theme.colors.primary}
      size="small"
      style={[style]}
      {...restProps}
    />
  );
};

export default PointsButton;
