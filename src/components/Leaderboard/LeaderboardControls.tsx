import { LeaderboardNavButton } from "@/components/ui/Button";
import SvgIcon from "@/components/ui/SvgIcon";

import { LeaderboardId, LEADERBOARDS } from "@/constants/Leaderboards";
import { ThemedView } from "../Themed";
import { useTheme } from "@/hooks/theme/useTheme";

export type LeaderboardControlsProps = {
  showFilterHandler: () => void;
  leaderboardId: LeaderboardId;
};
export default function LeaderboardControls({
  leaderboardId,
  showFilterHandler,
}: LeaderboardControlsProps) {
  const theme = useTheme();

  return (
    <ThemedView
      style={{
        flexDirection: "row",
        gap: theme.spacing.md,
        paddingHorizontal: theme.spacing.base,
        paddingVertical: theme.spacing.xs,
      }}
    >
      <LeaderboardNavButton
        label="Filter"
        onPress={showFilterHandler}
        contentLeft={
          <SvgIcon name="setting" color={theme.colors.primary} size={20} />
        }
      />

      <LeaderboardNavButton
        label={LEADERBOARDS.find((lb) => lb.id === leaderboardId)?.label}
        disabled
        style={{ flexGrow: 1 }}
      />
    </ThemedView>
  );
}
