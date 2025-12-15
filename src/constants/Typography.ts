// theme/typography.ts

export const fonts = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semibold: "Poppins-SemiBold",
};

// --- TYPOGRAPHY (Based on visual hierarchy) ---
const typeBase = {
  lineHeight: 16,
  letterSpacing: 0,
};

export const Typography = {
  h1: {
    fontSize: 28,
    // Use the custom font file name for the desired weight
    fontFamily: "Poppins-Bold",
  },
  h2: {
    fontSize: 22,
    fontFamily: "Poppins-SemiBold",
  },
  heading: {
    ...typeBase,
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
    lineHeight: 20,
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
    lineHeight: 18,
  },

  bodyLarge: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  desc: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
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
    fontFamily: "Poppins-Medium",
    lineHeight: 16,
  },
  points: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
  },
};
