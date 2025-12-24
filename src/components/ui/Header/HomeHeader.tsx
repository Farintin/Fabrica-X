import { StyleSheet, Alert } from "react-native";
import IconButton from "../Button/IconButton";
import { useTheme } from "@/hooks/theme/useTheme";
import BackButton from "../Button/BackButton";
import { ThemedViewProps } from "@/components/Themed";
import Header from ".";

export default function HomeHeader({
  title = "",
  hideNotice = false,
  style,
  ...restProps
}: { title?: string; hideNotice?: boolean } & ThemedViewProps) {
  const theme = useTheme();
  const color = theme.colors.textPrimary;

  return (
    <Header
      title={title}
      contentLeft={<BackButton iconColor={color} style={styles.gridItem} />}
      contentRight={
        !hideNotice && (
          <IconButton
            iconName="bell"
            onPress={() => Alert.alert("Show Notifications!")}
            iconColor={color}
            style={styles.gridItem}
          />
        )
      }
      titleStyle={[theme.typography.title]}
      {...restProps}
    />
  );
}

const styles = StyleSheet.create({
  gridItem: {
    marginHorizontal: 4,
  },
});
