// src/components/layout/AppLayout.tsx
import { useTheme } from "@/hooks/theme/useTheme";
import { Stack } from "expo-router";
import { ThemedView } from "../Themed";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function AppLayout() {
  const theme = useTheme();

  return (
    <ThemedView
      style={[
        {
          flex: 1,
          backgroundColor: theme.colors.natural.black,
        },
      ]}
    >
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="leaderboard"
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: "transparent" },
          }}
        />
      </Stack>
    </ThemedView>
  );
}
