import { ThemedView, ThemedViewProps } from "@/components/Themed";

export default function OverlayHeader({
  children,
  style,
  ...restProps
}: ThemedViewProps) {
  return (
    <ThemedView
      style={[
        {
          position: "absolute",
          top: 0,
          width: "100%",
          zIndex: 2,
        },
        style,
      ]}
      {...restProps}
    >
      {children}
    </ThemedView>
  );
}
