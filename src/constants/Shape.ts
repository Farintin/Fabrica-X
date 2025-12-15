import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

// --- 4. SPACING & DIMENSIONS ---

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16, // Standard padding/margin
  lg: 24, // Section separator spacing
  xl: 32, // Large gap
  xxl: 48,
};

// --- 5. BORDER RADIUS (New Section) ---

export const Radius = {
  xxs: 4,
  xs: 8,
  sm: 12, // Small radius (e.g., small buttons, inputs)
  base: 16,
  md: 20, // Medium radius (The radius used on the main "Surface" cards)
  lg: 24, // Large radius (If you need something more pronounced)
  xl: 28,
  xxl: 32,
  pill: 999, // Assumed button finite circular border perfectly round elements
};

export const Size = { deviceWidth: width, deviceHeight: height };
