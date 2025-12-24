import { OutlinedButtonProps } from "@/types/ui/button";
import OutlinedButton from "./OutlinedButton";

export default function LeaderboardNavButton({
  color,
  borderColor,
  ...restProps
}: OutlinedButtonProps) {
  return (
    <OutlinedButton color="#31313180" borderColor="#E6E6E6" {...restProps} />
  );
}
