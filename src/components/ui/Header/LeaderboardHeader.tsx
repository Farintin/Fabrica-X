import { StyleSheet } from "react-native";
import IconButton from "../Button/IconButton";
import { useTheme } from "@/hooks/theme/useTheme";
import BackButton from "../Button/BackButton";
import { ThemedViewProps } from "@/components/Themed";
import Header from ".";

export default function LeaderboardHeader(props: ThemedViewProps) {
  const theme = useTheme();
  const color = theme.colors.textPrimary;

  return (
    <Header
      title="Leaderboard"
      contentLeft={<BackButton iconColor={color} style={styles.gridItem} />}
      contentRight={
        <IconButton iconName="menu" iconColor={color} style={styles.gridItem} />
      }
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  gridItem: {
    marginHorizontal: 4,
  },
});
