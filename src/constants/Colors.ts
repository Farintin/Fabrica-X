const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

// --- 1. CORE COLOR PALETTES ---

const CoreColors = {
  // Brand & Accent
  fabricaXGreen: "#6FFF00", // Bright, neon green used for buttons, crowns, and accents
  bg: {
    black: "#121212",
    base: "#1E1E1E",
  },
  fg: { base: "#33353A80" },
  text: "#1E1E1E",

  // State Indicators
  success: "#34C759", // Standard green for success (e.g., in Leaderboard ranks)
  error: "#FF3B30", // Standard red for error/alerts
  warning: "#FFCC00",
};

// Neutral Tones
const Natural = {
  transparent: "transparent",
  white: "#FFFFFF",
  offWhite: "#F0F0F0",
  darkGrey: "#454545",
  lightGrey: "#AAAAAA",
  black: "#000000",
};

const Shadow = {
  card: {
    // box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.25);
    // Shadow (iOS)
    shadowColor: "rgba(255,255,255,0.33)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
    // Shadow / elevation (Android)
    elevation: 4,
  },
  groupButtonCard: {
    // box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.25);
    // Shadow (iOS)
    shadowColor: "rgba(255,255,255,0.5)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
    // Shadow / elevation (Android)
    elevation: 4,
  },
  segmentedTabs: {
    // box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.25);
    // Shadow (iOS)
    shadowColor: "rgba(255,255,255,0.5)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
    // Shadow / elevation (Android)
    elevation: 4,
  },
  banner: {
    // box-shadow: 0px 4px 4px 0px rgba(49, 49, 49, 0.25);
    // Shadow (iOS)
    shadowColor: "rgba(49, 49, 49, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    // Shadow / elevation (Android)
    elevation: 4,
  },
};

// const Blur={
//   // backdrop-filter: blur(50px)
// }

// --- 2. SEMANTIC COLORS (The ones you will use in components) ---
export const Colors = {
  // Backgrounds & Surfaces
  background: CoreColors.bg, // Main Screen Background (e.g., Challenge Detail)
  foreground: CoreColors.text, // Main Screen Background (e.g., Challenge Detail)
  surface: CoreColors.fg.base, // Card/Container Background (e.g., "What Can You Expect" cards)
  primary: CoreColors.fabricaXGreen, // Main interactive color (e.g., 'Register' button, countdown border)
  secondary: Natural.darkGrey, // Used for less dominant elements (e.g., inactive tabs/icons)

  // Text Colors (Foreground)
  textPrimary: Natural.white, // Main body and heading text
  textSecondary: Natural.lightGrey, // Subtitles, captions, and placeholder text
  textAccent: CoreColors.fabricaXGreen, // Text that needs highlighting (e.g., point values)
  textBlack: CoreColors.text, // Text that needs highlighting (e.g., point values)

  // Specific UI Elements
  inputBorder: Natural.darkGrey, // Border color for input fields
  shadow: Shadow, // For card shadows (if needed)
  buttonForeground: Natural.black, // Text color on the bright primary button

  // Statuses
  success: CoreColors.success,
  error: CoreColors.error,
  natural: Natural,
};

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};
