import { range } from "@/src/util/helper";
import { BlurView } from "expo-blur";
import { StyleSheet, View, ViewProps } from "react-native";

export default function VerticalGradientBlur({
  children,
  style,
  ...restProps
}: ViewProps) {
  const intensity = 16;
  const step = 4;
  const min = 2;
  return (
    <View
      style={[
        {
          flex: 1,
        },
        style,
      ]}
      {...restProps}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <BlurView
          intensity={intensity}
          tint="dark"
          style={StyleSheet.absoluteFill}
        />
      </View>
      {range(intensity - step, min, -step).map((n, i) => {
        return (
          <View
            key={i}
            style={[
              {
                height: n <= 2 ? 2 : n - 2,
              },
            ]}
          >
            <BlurView
              intensity={n}
              tint="dark"
              style={StyleSheet.absoluteFill}
            />
          </View>
        );
      })}
    </View>
  );
}
