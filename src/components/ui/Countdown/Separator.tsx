import { useTheme } from "@/hooks/theme/useTheme";
import SvgIcon from "../SvgIcon";

type SeperatorProps = { size?: number };

export default function Separator({ size = 34 }: SeperatorProps) {
  const theme = useTheme();
  const width = Math.floor(size * 0.37);

  return (
    <SvgIcon
      name="column"
      color={theme.colors.natural.white}
      width={width}
      style={{
        aspectRatio: 0.25,
        alignSelf: "flex-start",
        marginTop: -width * 0.75,
        marginHorizontal: theme.spacing.xs,
      }}
    />
  );
}
