import { HomeAnimationProvider } from "@/screens/Home/HomeAnimationContext";
import { Slot } from "expo-router";

export default function PrivateLayout() {
  return (
    <HomeAnimationProvider>
      <Slot />
    </HomeAnimationProvider>
  );
}
