import { useTheme } from "@/hooks/useTheme";
import Time from "./Time";

export default function Separator() {
  const theme = useTheme();
  return (
    <Time
      style={[
        theme.typography.timerValue,
        { fontSize: 34, marginHorizontal: 2 },
      ]}
    >
      :
    </Time>
  );
}
