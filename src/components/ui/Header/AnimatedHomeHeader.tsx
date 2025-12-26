import HomeHeader, { HomeHeaderProps } from "./HomeHeader";
import AnimatedHeader from "./AnimatedHeader";

export default function AnimatedHomeHeader({
  onLayout,
  ...restProps
}: HomeHeaderProps) {
  return (
    <AnimatedHeader onLayout={onLayout}>
      <HomeHeader {...restProps} />
    </AnimatedHeader>
  );
}
