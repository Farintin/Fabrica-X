// src/components/ui/Challenge/ContainerCards.tsx
import { Text } from "react-native";
import Timer from "../../../Timer";
import { useTheme } from "@/src/hooks/useTheme";
import { AnimatedChallengeCard } from "../../../Cards/ChallengeCards";
import { ContainerProps } from "@/src/types";

export default function CountdownCard({
  wrapperStyle,
  ...restProps
}: ContainerProps) {
  const theme = useTheme();

  return (
    <AnimatedChallengeCard
      delay={500}
      wrapperStyle={{
        paddingVertical: theme.spacing.md,
        backgroundColor: "rgba(0, 0, 0, .35)",
      }}
      {...restProps}
    >
      <Text
        style={{
          fontFamily: "Poppins-Medium",
          fontSize: 10,
          lineHeight: 14,
          letterSpacing: 0,
          color: "rgba(255, 255, 255, 0.65)",
          marginVertical: theme.spacing.sm,
          textAlign: "center",
        }}
      >
        ENDS IN
      </Text>
      <Timer />
    </AnimatedChallengeCard>
  );
}
