import { Colors } from "./Colors";
import { Radius, Spacing } from "./Shape";
import { Typography } from "./Typography";

// --- THEME EXPORT (For useTheme hook) ---

// Define the full Theme type
export type Theme = {
  colors: typeof Colors;
  typography: typeof Typography;
  spacing: typeof Spacing;
  radius: typeof Radius;
};

// Create a single, read-only theme object
export const AppTheme: Theme = {
  colors: Colors,
  typography: Typography,
  spacing: Spacing,
  radius: Radius,
};

// Note: Ensure your useTheme.ts file imports and exports AppTheme correctly.
