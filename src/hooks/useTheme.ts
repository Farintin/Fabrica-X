import { AppTheme } from "@/constants/Theme";

// Custom hook to consume the theme
export const useTheme = () => AppTheme;

// Note: If you add Dark Mode later, this hook would use React Context.
