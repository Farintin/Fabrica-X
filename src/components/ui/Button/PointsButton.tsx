import { useTheme } from "@/src/hooks/useTheme";
import { PointsButtonProps } from "@/src/types/button";
import OutlineButton from "@/src/components/ui/Button/ButtonOutlined";

const PointsButton: React.FC<PointsButtonProps> = ({
  point,
  style,
  ...restProps
}) => {
  const theme = useTheme();

  return (
    <OutlineButton
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
