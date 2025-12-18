import { View, ViewProps } from "react-native";

export default function OverlayHeader({
  children,
  style,
  ...restProps
}: ViewProps) {
  return (
    <View
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
    </View>
  );
}
