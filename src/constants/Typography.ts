// theme/typography.ts

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
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
  },
  heading: {
    ...typeBase,
    fontSize: 18,
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

  bodyLarge: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  desc: {
    ...typeBase,
    fontSize: 14,
    fontFamily: "Poppins-Medium",
  },

  button: {
    ...typeBase,
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    lineHeight: 19,
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
