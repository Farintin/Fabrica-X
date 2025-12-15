import { Modal, Pressable, Text, View } from "react-native";
import { PeriodFilter } from "@/api/leaderboardApi";
import { useTheme } from "@/hooks/useTheme";

const OPTIONS: PeriodFilter[] = ["All Time", "This Week", "This Month"];

interface Props {
  visible: boolean;
  value: PeriodFilter;
  onSelect: (value: PeriodFilter) => void;
  onClose: () => void;
}

export default function LeaderboardFilterModal({
  visible,
  value,
  onSelect,
  onClose,
}: Props) {
  const theme = useTheme();

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <Pressable
        onPress={onClose}
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.5)",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            backgroundColor: theme.colors.background.black,
            padding: theme.spacing.lg,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
          }}
        >
          <Text
            style={{
              color: "#F5F5F5",
              fontSize: 16,
              fontFamily: "Poppins-Medium",
              marginBottom: theme.spacing.lg,
              textAlign: "center",
            }}
          >
            Filter
          </Text>

          {OPTIONS.map((option) => {
            const selected = option === value;

            return (
              <Pressable
                key={option}
                onPress={() => onSelect(option)}
                style={{
                  paddingVertical: theme.spacing.md,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: selected
                      ? theme.colors.primary
                      : theme.colors.textPrimary,
                    fontSize: 14,
                  }}
                >
                  {option}
                </Text>

                {selected ? (
                  <View
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
                    <View
                      style={{
                        width: 11,
                        height: 11,
                        borderRadius: 999,
                        backgroundColor: theme.colors.primary,
                      }}
                    />
                  </View>
                ) : (
                  <View
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
          })}

          <Text
            style={{
              color: "#F5F5F5",
              fontSize: 18,
              fontFamily: "Poppins-Regular",
              marginBottom: theme.spacing.md,
              textAlign: "center",
              marginTop: theme.spacing.xl,
            }}
          >
            CANCEL
          </Text>
        </View>
      </Pressable>
    </Modal>
  );
}
