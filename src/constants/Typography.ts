// constant/typography.ts

import { StyleProp, TextStyle } from "react-native";

// --- TYPOGRAPHY (Based on visual hierarchy) ---
const typeBase = {
  lineHeight: 16,
  letterSpacing: 0,
};

export const Typography: Record<string, TextStyle> = {
  h1: {
    fontSize: 28,
    fontFamily: "Poppins-Bold",
  },
  h2: {
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
  },
  heading: {
    ...typeBase,
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    lineHeight: 24,
  },
  subHeading: {
    ...typeBase,
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    lineHeight: 18,
  },
  title: {
    ...typeBase,
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    lineHeight: 20,
  },

  bodyTextLarge: {
    ...typeBase,
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },
  bodyText: {
    ...typeBase,
    fontSize: 14,
    fontFamily: "Poppins-Medium",
  },
  bodyTextSmall: {
    ...typeBase,
    fontSize: 12,
    fontFamily: "Poppins-Medium",
  },

  desc: {
    ...typeBase,
    fontSize: 14,
    fontFamily: "Poppins-Medium",
  },

  miniTextBold: {
    ...typeBase,
    fontSize: 10,
    fontFamily: "Poppins-SemiBold",
  },
  miniText: {
    ...typeBase,
    fontSize: 10,
    fontFamily: "Poppins-Medium",
    lineHeight: 14,
  },

  button: {
    ...typeBase,
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    lineHeight: 19,
  },
  buttonMini: {
    ...typeBase,
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    lineHeight: 14,
  },
  buttonSmall: {
    ...typeBase,
    fontSize: 10,
    fontFamily: "Poppins-Medium",
    lineHeight: 14,
  },
  buttonLarge: {
    ...typeBase,
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    lineHeight: 20,
  },

  timerValue: {
    fontFamily: "Poppins-Medium",
    fontSize: 30,
    lineHeight: 34,
    letterSpacing: -1,
  },

  name: {
    ...typeBase,
    fontSize: 12,
    fontFamily: "Poppins-Medium",
    lineHeight: 14,
  },
  points: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
  },
};
