// src/components/layout/AppLayout.tsx
import { View } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function AppLayout() {
  const theme = useTheme();

  return (
    <View
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
    </View>
  );
}
