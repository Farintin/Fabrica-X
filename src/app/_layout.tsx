// src/app/_layout.tsx
import { SafeAreaView } from "react-native-safe-area-context";
import AppLayout from "@/components/layout/AppLayout";
import useSplashScreen from "@/hooks/useSplashScreen";

export { ErrorBoundary } from "expo-router";

export default function RootLayout() {
  const { appIsReady } = useSplashScreen();

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      edges={["left", "right"]} // 👈 important
    >
      <AppLayout />
    </SafeAreaView>
  );
}
