import {
  Alert,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import SvgIcon from "../SvgIcon";
import IconButtonWhite from "../IconButtonWhite";
import Timer from "../Timer";
import { useTheme } from "@/src/hooks/useTheme";

type ContainerProps = ViewProps & { wrapperStyle?: StyleProp<ViewStyle> };

const Card = ({ children, style, wrapperStyle }: ContainerProps) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.card,
        theme.colors.shadow.card,
        {
          backgroundColor: theme.colors.surface,
          borderRadius: theme.radius.md,
        },
        style,
      ]}
    >
      <View
        style={[
          styles.wrapper,
          {
            borderRadius: theme.radius.md,
            paddingHorizontal: theme.spacing.md,
            paddingVertical: theme.spacing.xl,
          },
          wrapperStyle,
        ]}
      >
        {children}
      </View>
    </View>
  );
};

const GroupButton = ({ style, wrapperStyle }: ContainerProps) => {
  const iconSize = 14;
  const theme = useTheme();

  return (
    <Card
      style={[
        theme.colors.shadow.groupButtonCard,
        {
          borderRadius: theme.radius.pill,
          paddingHorizontal: 0,
          paddingVertical: 0,
          width: "auto",
        },
        style,
      ]}
      wrapperStyle={[
        {
          paddingHorizontal: theme.spacing.sm,
          paddingVertical: theme.spacing.sm,
        },
        wrapperStyle,
      ]}
    >
      <View style={[styles.buttonGroup, { gap: theme.spacing.sm + 4 }]}>
        <IconButtonWhite
          iconName="leaderboard"
          label="leaderboard"
          iconSize={iconSize}
          onPress={() => Alert.alert("Leaderboard")}
        />

        <IconButtonWhite
          iconName="voucher"
          iconSize={iconSize + 1}
          onPress={() => Alert.alert("Voucher")}
        />

        <IconButtonWhite
          iconName="gift"
          iconSize={iconSize + 1}
          onPress={() => Alert.alert("Gift")}
        />
      </View>
    </Card>
  );
};

const Article = ({ text }: { text: string }) => {
  const theme = useTheme();

  return (
    <Text style={[styles.article, { color: theme.colors.textPrimary }]}>
      {text}
    </Text>
  );
};

const Highlight = ({ children, style }: ViewProps) => {
  const theme = useTheme();

  return (
    <View
      style={[
        {
          alignItems: "center",
          paddingHorizontal: theme.spacing.sm + 2,
          gap: theme.spacing.sm,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const ContainerCards = ({ style }: ViewProps) => {
  const theme = useTheme();
  const iconSize = 16;
  const iconColor = theme.colors.primary;

  return (
    <View
      style={[
        {
          alignItems: "center",
          paddingHorizontal: theme.spacing.md,
          paddingVertical: theme.spacing.sm,
          gap: theme.spacing.sm,
        },
        style,
      ]}
    >
      <Card>
        <Text
          style={{
            ...theme.typography.heading,
            color: theme.colors.textPrimary,
            marginVertical: theme.spacing.sm,
            textAlign: "center",
          }}
        >
          Global Change Award @ Fabrica X
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: theme.spacing.sm,
          }}
        >
          {/* Left side of the header */}
          <Highlight>
            <SvgIcon name="user-octagon" size={iconSize} color={iconColor} />
            <Article text={"Fabrica X \n H&M Foundation"} />
          </Highlight>

          {/* Center of the header (title) */}
          <Highlight
            style={{
              borderColor: "#7C7C7C",
              borderLeftWidth: 1,
              borderRightWidth: 1,
            }}
          >
            <SvgIcon name="location" size={iconSize} color={iconColor} />
            <Article text={"Fabrica X, \n King’s Cross, London"} />
          </Highlight>

          {/* Right side of the header (grid items) */}
          <Highlight>
            <SvgIcon name="duration" size={iconSize} color={iconColor} />
            <Article text={"17 Sep - 01 Oct"} />
          </Highlight>
        </View>
      </Card>

      <GroupButton
        style={{
          marginTop: -22,
          zIndex: 2,
        }}
        wrapperStyle={{
          backgroundColor: "rgba(0, 0, 0, .35)",
        }}
      />

      <Card
        style={[
          {
            marginTop: -22,
          },
        ]}
        wrapperStyle={{
          paddingVertical: theme.spacing.md,
          backgroundColor: "rgba(0, 0, 0, .35)",
        }}
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
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
  },
  wrapper: {
    borderRadius: 20,
    backgroundColor: "rgba(51, 53, 58, 0.6)",
  },
  buttonGroup: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  article: {
    fontFamily: "Poppins-Medium",
    fontSize: 11,
    lineHeight: 15,
    letterSpacing: 0,
    color: "#fff",
    textAlign: "center",
  },
});

export default ContainerCards;
