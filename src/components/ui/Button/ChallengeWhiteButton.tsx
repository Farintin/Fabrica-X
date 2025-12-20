import { StyleProp, ViewStyle } from "react-native";
import SvgIcon from "../SvgIcon"; // Import the icon component
import { useTheme } from "@/src/hooks/useTheme";
import Button from "./Button";
import { IconButtonProps } from "@/src/types/button";

export default function ChallengeWhiteButton({
  iconName,
  label,
  style,
  ...restProps
}: IconButtonProps) {
  const theme = useTheme();
  const color = theme.colors.textBlack;
  const width = 28;
  let buttonStyle: StyleProp<ViewStyle> = {};

  if (label) {
    buttonStyle = {
      width: "auto",
      paddingHorizontal: theme.spacing.md,
    };
  }

  return (
    <Button
      style={[
        {
          paddingHorizontal: 0,
          paddingVertical: 0,
          width: width,
          height: width,
          backgroundColor: theme.colors.natural.white,
        },
        buttonStyle,
        style,
      ]}
      label={label}
      contentLeft={<SvgIcon name={iconName} size={14} color={color} />}
      labelStyle={[{ color }]}
      size="small"
      {...restProps}
    />
  );
}
