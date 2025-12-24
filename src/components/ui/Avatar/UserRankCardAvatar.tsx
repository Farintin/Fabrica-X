// src/components/ui/Avatar/UserRankCardAvatar.tsx
import { ThemedView, ThemedViewProps } from "@/components/Themed";
import { Heading } from "@/components/typography/Heading";
import { useTheme } from "@/hooks/theme/useTheme";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

export default function UserRankCardAvatar({
  displayName,
  avatarUrl,
  style,
}: { displayName: string; avatarUrl: string } & ThemedViewProps) {
  const theme = useTheme();
  const names = displayName.split(" ");
  const fname = names[0];
  const lname = names[1];
  const nameAvatar = fname[0] + lname[0];

  return (
    <ThemedView
      style={[
        styles.avatar,
        {
          backgroundColor: "#A0A0A7",
          borderRadius: theme.radius.pill,
        },
        style,
      ]}
    >
      {avatarUrl ? (
        <Image
          source={{ uri: avatarUrl }}
          cachePolicy={"memory-disk"}
          style={[styles.imageAvatar]}
        />
      ) : (
        <Heading tone="white" style={[styles.nameAvatar]}>
          {nameAvatar}
        </Heading>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: 42,
    aspectRatio: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imageAvatar: {
    width: "100%",
    height: "100%",
  },
  nameAvatar: { textTransform: "uppercase" },
});
