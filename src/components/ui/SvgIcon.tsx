// components/SvgIcon.tsx
import React from "react";
import { SvgProps } from "react-native-svg";

// Import your SVG files directly
import ArrowLeft from "@/assets/icons/ArrowLeft.svg";
import Bell from "@/assets/icons/Bell.svg";
import Link from "@/assets/icons/Link.svg";
import Live from "@/assets/icons/Live.svg";
import UserOctagon from "@/assets/icons/UserOctagon.svg";
import Location from "@/assets/icons/Location.svg";
import Duration from "@/assets/icons/Duration.svg";
import Leaderboard from "@/assets/icons/Leaderboard.svg";
import LeaderboardPrize from "@/assets/icons/LeaderboardPrize.svg";
import Voucher from "@/assets/icons/Voucher.svg";
import Gift from "@/assets/icons/Gift.svg";
import GiftPrize from "@/assets/icons/GiftPrize.svg";
import Crown from "@/assets/icons/Crown.svg";
import Ranking from "@/assets/icons/Ranking.svg";
import Menu from "@/assets/icons/Menu.svg";
import Setting from "@/assets/icons/Setting.svg";
import Column from "@/assets/icons/Column.svg";

// Map component names to the imported SVG modules
const IconMap = {
  "arrow-left": ArrowLeft,
  bell: Bell,
  link: Link,
  live: Live,
  "user-octagon": UserOctagon,
  location: Location,
  duration: Duration,
  leaderboard: Leaderboard,
  "leaderboard-prize": LeaderboardPrize,
  voucher: Voucher,
  gift: Gift,
  "gift-prize": GiftPrize,
  crown: Crown,
  ranking: Ranking,
  menu: Menu,
  setting: Setting,
  column: Column,
};

type IconName = keyof typeof IconMap;

interface SvgIconProps extends SvgProps {
  name: IconName;
  size?: number;
  color?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  ...restProps
}) => {
  const IconComponent = IconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  // NOTE: You must update the fill properties in the original SVG files
  // to use 'currentColor' or 'none' so that the 'color' prop works.

  return (
    <IconComponent
      width={size}
      height={size}
      fill={color} // The fill prop should override the SVG's internal fill
      {...restProps}
    />
  );
};

export default SvgIcon;
