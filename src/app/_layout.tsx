// src/app/_layout.tsx
import AppLayout from "@/components/layout/AppLayout";
import { CountdownProvider } from "@/context/CountdownContext";
import useSplashScreen from "@/hooks/useSplashScreen";
import { StatusBar } from "expo-status-bar";

export { ErrorBoundary } from "expo-router";

export default function RootLayout() {
  const { appIsReady } = useSplashScreen();

  if (!appIsReady) {
    return null;
  }

  return (
    <CountdownProvider>
      <StatusBar style={"light"} />
      <AppLayout />
    </CountdownProvider>
  );
}
