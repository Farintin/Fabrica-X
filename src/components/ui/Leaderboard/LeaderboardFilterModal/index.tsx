// src/components/ui/Leaderboard/LeaderboardFilterModal/index.tsx
import { Modal, Pressable } from "react-native";
import { useState } from "react";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";

import { PeriodFilter } from "@/libs/api/leaderboardApi";
import {
  LeaderboardId,
  LEADERBOARDS,
  PERIOD_OPTIONS,
} from "@/constants/Leaderboards";
import { useTheme } from "@/hooks/theme/useTheme";
import SvgIcon from "@/components/ui/SvgIcon";
import {
  ThemedViewProps,
  ThemedTextProps,
  ThemedText,
  ThemedView,
} from "@/components/Themed";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CLOSE_DELAY = 150;

interface Props {
  visible: boolean;
  period: PeriodFilter;
  leaderboardId: LeaderboardId;
  onSelectPeriod: (value: PeriodFilter) => void;
  onSelectLeaderboard: (id: LeaderboardId) => void;
  onClose: () => void;
}

const Row = ({ style, ...restProps }: ThemedViewProps) => {
  const theme = useTheme();
  return (
    <ThemedView
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: theme.spacing.sm,
        },
        style,
      ]}
      {...restProps}
    />
  );
};

const HeadingText = ({ style, ...restProps }: ThemedTextProps) => {
  const theme = useTheme();
  return (
    <ThemedText
      style={[
        theme.typography.title,
        {
          color: "#F5F5F5",
        },
        style,
      ]}
      {...restProps}
    />
  );
};

const SelectItem = ({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) => {
  const theme = useTheme();
  return (
    <Pressable
      onPress={onSelect}
      style={{
        paddingVertical: theme.spacing.sm,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <ThemedText
        style={[
          theme.typography.button,
          {
            color: selected ? theme.colors.primary : theme.colors.textPrimary,
          },
        ]}
      >
        {label}
      </ThemedText>

      {selected ? (
        <ThemedView
          style={{
            width: 18,
            height: 18,
            borderRadius: 999,
            borderColor: "#F5F5F5",
            borderWidth: 1.5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ThemedView
            style={{
              width: 11,
              height: 11,
              borderRadius: 999,
              backgroundColor: theme.colors.primary,
            }}
          />
        </ThemedView>
      ) : (
        <ThemedView
          style={{
            width: 18,
            height: 18,
            borderRadius: 999,
            borderColor: "#F5F5F5",
            borderWidth: 1.5,
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      )}
    </Pressable>
  );
};

const RootView = ({
  period,
  setView,
  onSelectPeriod,
  requestClose,
}: {
  period: PeriodFilter;
  onSelectPeriod: (period: PeriodFilter) => void;
  setView: (view: "root" | "challenge") => void;
  requestClose: () => void;
}) => {
  const theme = useTheme();
  const handlePeriodSelect = (value: PeriodFilter) => {
    onSelectPeriod(value); // immediate highlight
    requestClose();
  };
  return (
    <ThemedView
      style={{
        gap: theme.spacing.lg,
      }}
    >
      <ThemedView
        style={{
          gap: theme.spacing.md,
        }}
      >
        {PERIOD_OPTIONS.map((option) => {
          const { label, value } = option;
          const selected = value === period;

          return (
            <SelectItem
              key={value}
              label={label}
              selected={selected}
              onSelect={() => handlePeriodSelect(value)}
            />
          );
        })}
      </ThemedView>

      {/* Challenge Navigation */}
      <ThemedView>
        <SelectItem
          selected={true}
          label="Challenge"
          onSelect={() => setView("challenge")}
        />
      </ThemedView>
    </ThemedView>
  );
};

const ChallengeView = ({
  leaderboardId,
  onSelectLeaderboard,
  requestClose,
}: {
  leaderboardId: LeaderboardId;
  onSelectLeaderboard: (id: LeaderboardId) => void;
  requestClose: () => void;
}) => {
  const theme = useTheme();
  const handleLeaderboardSelect = (id: LeaderboardId) => {
    onSelectLeaderboard(id); // immediate highlight
    requestClose();
  };

  return (
    <ThemedView
      style={{
        gap: theme.spacing.md,
      }}
    >
      {LEADERBOARDS.map((lb) => {
        const selected = lb.id === leaderboardId;

        return (
          <SelectItem
            key={lb.id}
            label={lb.label}
            selected={selected}
            onSelect={() => handleLeaderboardSelect(lb.id)}
          />
        );
      })}
    </ThemedView>
  );
};

export default function LeaderboardFilterModal({
  visible,
  period,
  leaderboardId,
  onSelectPeriod,
  onSelectLeaderboard,
  onClose,
}: Props) {
  const [view, setView] = useState<"root" | "challenge">("root");
  const theme = useTheme();
  const { bottom } = useSafeAreaInsets();

  /* -------------------------------------------------------
     DELAYED CLOSE (ANIMATED)
  ------------------------------------------------------- */
  const requestClose = () => {
    const timeout = setTimeout(onClose, CLOSE_DELAY);
    return () => clearTimeout(timeout);
  };

  /* -------------------------------------------------------
     RENDER
  ------------------------------------------------------- */
  return (
    <Modal transparent visible={visible} animationType="fade">
      {/* Overlay */}
      <Pressable
        onPress={requestClose}
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.5)",
          justifyContent: "flex-end",
        }}
      >
        {/* Bottom Sheet */}
        <Animated.View
          entering={FadeInDown.duration(250)}
          exiting={FadeOutDown.duration(200)}
        >
          <Pressable
            onPress={() => {}}
            style={{
              backgroundColor: theme.colors.background.base,
              padding: theme.spacing.lg,
              paddingBottom: bottom,
              borderTopLeftRadius: theme.spacing.lg,
              borderTopRightRadius: theme.spacing.lg,
              gap: theme.spacing.wide,
            }}
          >
            {/* HEADER */}
            <Row>
              {view === "challenge" && (
                <Pressable
                  onPress={() => setView("root")}
                  style={{
                    position: "absolute",
                    left: 0,
                    // paddingHorizontal: 2,
                  }}
                >
                  <SvgIcon
                    name="arrow-left"
                    size={24}
                    color={theme.colors.textPrimary}
                  />
                </Pressable>
              )}

              <HeadingText style={{}}>
                {view === "root" ? "Filter" : "Challenge"}
              </HeadingText>
            </Row>

            {/* ROOT VIEW */}
            {view === "root" && (
              <RootView
                period={period}
                setView={setView}
                onSelectPeriod={onSelectPeriod}
                requestClose={requestClose}
              />
            )}

            {/* CHALLENGE VIEW */}
            {view === "challenge" && (
              <ChallengeView
                leaderboardId={leaderboardId}
                onSelectLeaderboard={onSelectLeaderboard}
                requestClose={requestClose}
              />
            )}

            {/* Footer */}
            <Row>
              {/* Cancel */}
              <Pressable onPress={requestClose} style={{}}>
                <HeadingText
                  style={[
                    theme.typography.buttonLarg,
                    {
                      textTransform: "uppercase",
                    },
                  ]}
                >
                  Cancel
                </HeadingText>
              </Pressable>
            </Row>
          </Pressable>
        </Animated.View>
      </Pressable>
    </Modal>
  );
}
