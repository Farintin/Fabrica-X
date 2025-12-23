// src/components/ui/Challenge/ContainerCards.tsx
import { View, ViewProps } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import Animated, { FadeInDown } from "react-native-reanimated";
import GroupButtonCard from "./Cards/GroupButtonCard";
import AwardCard from "./Cards/AwardCard";
import CountdownCard from "./Cards/CountdownCard";

export default function ContainerCards({ style }: ViewProps) {
  const theme = useTheme();

  return (
    <View
      style={[
        {
          alignItems: "center",
          paddingHorizontal: theme.spacing.base,
          gap: theme.spacing.sm,
        },
        style,
      ]}
    >
      <AwardCard />

      <Animated.View
        entering={FadeInDown.delay(1000).duration(800).springify().damping(18)}
        style={{
          marginVertical: -22,
          zIndex: 1,
        }}
      >
        <GroupButtonCard
          wrapperStyle={{
            backgroundColor: "rgba(0, 0, 0, .35)",
          }}
        />
      </Animated.View>

      <CountdownCard />
    </View>
  );
}
