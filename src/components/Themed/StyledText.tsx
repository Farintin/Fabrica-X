// src/components/Themed/StyledText.tsx
import { ThemedText, ThemedTextProps } from "./ThemedText";

export function MonoText(props: ThemedTextProps) {
  return (
    <ThemedText {...props} style={[{ fontFamily: "SpaceMono" }, props.style]} />
  );
}
