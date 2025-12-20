import { useTheme } from "@/src/hooks/useTheme";
import { PointsButtonProps } from "@/src/types/button";
import OutlinedButton from "@/src/components/ui/Button/OutlinedButton";

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
