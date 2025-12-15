// svg.d.ts

// This declares that any import ending with '.svg'
// should be treated as a valid module.

declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";

  // The default export is the React component itself
  const content: React.FC<SvgProps>;
  export default content;
}
