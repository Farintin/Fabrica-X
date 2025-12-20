// src/hooks/useTheme.ts
import { AppTheme } from "@/constants/Theme";
import { useColorScheme } from "react-native";

// Custom hook to consume the theme
export const useTheme = () => {
  const scheme = useColorScheme() ?? "light";
  return {
    ...AppTheme,
    darkMode: scheme === "dark",
  };
};

// Note: If you add Dark Mode later, this hook would use React Context.
