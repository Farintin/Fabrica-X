import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "expo-image";
import { BlurView } from "expo-blur";
import { PointCardProps, PrizeCardProps } from "@/src/types/card";
import PointsButton from "@/components/ui/Button/PointsButton";
import SvgIcon from "@/src/components/ui/SvgIcon";
import { useTheme } from "@/src/hooks/useTheme";

const PrizeCard = ({
  source: imageSource,
  iconName,
  levelText,
  infoText,
  style,
}: PrizeCardProps) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[
        {
          borderRadius: theme.radius.md,
          overflow: "hidden",
        },
        style,
      ]}
    >
      <ImageBackground
        source={imageSource}
        style={{
          gap: theme.spacing.md,
          alignItems: "center",
        }}
      >
        <SvgIcon
          name={iconName}
          size={28}
          color={theme.colors.primary}
          style={{
            margin: theme.spacing.lg,
          }}
        />
        <View
          style={{
            alignSelf: "stretch",
          }}
        >
          <BlurView
            intensity={Platform.OS === "ios" ? 5 : 10}
            tint="light"
            style={[StyleSheet.absoluteFill]}
          />
          <LinearGradient
            colors={[
              "transparent",
              "transparent",
              "transparent",
              "rgba(00, 0, 0, 0.15)",
              "rgba(00, 0, 0, 0.25)",
            ]}
            style={[
              {
                padding: theme.spacing.md,
                gap: theme.spacing.sm,
                alignItems: "center",
              },
            ]}
          >
            <Text
              style={[
                theme.typography.heading,
                { color: theme.colors.primary },
              ]}
            >
              {levelText}
            </Text>
            <Text
              style={[
                theme.typography.subHeading,
                { color: theme.colors.natural.white },
              ]}
            >
              {infoText}
            </Text>
          </LinearGradient>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const PointCard = ({ title, desc, point, style }: PointCardProps) => {
  const theme = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: "#808080",
          borderRadius: theme.radius.md,
          paddingHorizontal: theme.spacing.md,
          paddingVertical: theme.spacing.lg,
          gap: theme.spacing.md,
          flexShrink: 1,
          justifyContent: "space-between",
        },
        style,
      ]}
    >
      <View
        style={[
          {
            gap: theme.spacing.md,
          },
          style,
        ]}
      >
        <Text
          style={[theme.typography.heading, { color: theme.colors.primary }]}
        >
          {title}
        </Text>
        <Text style={[theme.typography.desc, { color: "#E6E6E6" }]}>
          {desc}
        </Text>
      </View>
      <PointsButton point={point} style={{ alignSelf: "flex-end" }} />
    </View>
  );
};

function Prizes() {
  const theme = useTheme();
  return (
    <View style={{ gap: theme.spacing.sm }}>
      <Text
        style={{
          ...theme.typography.heading,
          color: theme.colors.textPrimary,
        }}
      >
        What Can You Expect
      </Text>
      <PrizeCard
        source={require("@/assets/images/1st Place Prize.png")}
        iconName="leaderboard-prize"
        levelText="1st Place Prize"
        infoText="Sustainable Goodie Bag"
      />
      <View
        style={{
          flexDirection: "row",
          gap: theme.spacing.sm,
        }}
      >
        <PrizeCard
          source={require("@/assets/images/Runners Up x 4.png")}
          iconName="gift-prize"
          levelText="Runners Up x 4"
          infoText="Surprise Gift"
          style={{ flexGrow: 1 }}
        />
        <PrizeCard
          source={require("@/assets/images/coffee.png")}
          iconName="leaderboard-prize"
          levelText="All Participants"
          infoText="50% OFF Café"
          style={{ flexGrow: 1 }}
        />
      </View>
    </View>
  );
}

function Collectables() {
  const theme = useTheme();
  return (
    <View style={{ gap: theme.spacing.sm }}>
      <Text
        style={{
          ...theme.typography.heading,
          color: theme.colors.textPrimary,
        }}
      >
        Type of Collectibles
      </Text>
      <View
        style={{
          flexDirection: "row",
          gap: theme.spacing.sm,
        }}
      >
        <PointCard
          title="Innovation"
          desc="The situations that reshaping fashion’s future"
          point={15}
        />
        <PointCard
          title="Issues"
          desc="The problems hidden among the treasure"
          point={0}
        />
      </View>
    </View>
  );
}

export default function PrizesSection() {
  const theme = useTheme();

  return (
    <View style={{ paddingVertical: theme.spacing.md, gap: theme.spacing.xl }}>
      <Prizes />
      <Collectables />
    </View>
  );
}
