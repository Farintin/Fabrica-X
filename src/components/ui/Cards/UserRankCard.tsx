import { RankProps } from "@/types";
import RankCard from "./RankCard";

export default function UserRankCard({ style, ...restProps }: RankProps) {
  return (
    <RankCard
      style={{
        backgroundColor: "#3A3A3C",
        borderStyle: "dashed",
        borderColor: "#C2F9B7",
        borderWidth: 1,
      }}
      {...restProps}
    />
  );
}
