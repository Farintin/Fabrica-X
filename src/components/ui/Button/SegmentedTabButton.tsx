// src/components/ui/Button/SegmentedTabButton.tsx
import { IconNameType } from "@/types";
import { TabsKey } from "@/types/tabs";
import { Pressable } from "react-native";
import SvgIcon from "../SvgIcon";
import { useTheme } from "@/hooks/theme/useTheme";
import Animated from "react-native-reanimated";
import { ThemedViewProps } from "@/components/Themed";

export const ActiveTabIndicator = ({ style }: ThemedViewProps) => {
  const theme = useTheme();

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          height: "100%",
          alignSelf: "center",
          backgroundColor: theme.colors.primary,
          borderRadius: theme.radius.pill,
        },
        style,
      ]}
    />
  );
};

export const TabButton = ({
  iconName,
  activeTab,
  tab,
  onChange,
}: {
  iconName: IconNameType;
  activeTab: TabsKey;
  tab: TabsKey;
  onChange: (k: TabsKey) => void;
}) => {
  const theme = useTheme();
  const iconSize = 20;

  return (
    <Pressable
      onPress={() => onChange(tab)}
      style={[
        {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: theme.spacing.sm,
        },
      ]}
    >
      <SvgIcon
        name={iconName}
        size={iconSize}
        color={
          activeTab === tab
            ? theme.colors.natural.white
            : "rgba(245,245,245,.9)"
        }
      />
    </Pressable>
  );
};
