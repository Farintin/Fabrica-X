import { useRouter } from "expo-router";
import IconButton from "./IconButton";
import { TouchableOpacityProps } from "react-native";

export default function BackButton({
  iconColor,
  style,
}: { iconColor: string } & TouchableOpacityProps) {
  const router = useRouter();

  const goBackHandler = () => {
    router.canGoBack() ? router.back() : null;
  };
  return (
    <IconButton
      iconName="arrow-left"
      onPress={goBackHandler}
      iconColor={iconColor}
      style={[style]}
    />
  );
}
