import { Modal, View, Text, TouchableOpacity } from "react-native";

const CHALLENGES = [
  { id: "fabricax", name: "Fabrica X" },
  { id: "challenge1", name: "Challenge 1" },
  { id: "challenge2", name: "Challenge 2" },
];

export default function ChallengeFilterModal({
  visible,
  selected,
  onSelect,
  onClose,
}: any) {
  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.6)" }}>
        <View
          style={{
            marginTop: "auto",
            backgroundColor: "#1C1C1C",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            padding: 20,
          }}
        >
          <Text style={{ color: "#fff", marginBottom: 12 }}>Challenge</Text>

          {CHALLENGES.map((c) => (
            <TouchableOpacity
              key={c.id}
              onPress={() => onSelect(c.id)}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 14,
              }}
            >
              <Text style={{ color: "#fff" }}>{c.name}</Text>
              <View
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 9,
                  backgroundColor:
                    selected === c.id ? "#A6FF4D" : "transparent",
                  borderWidth: 1,
                  borderColor: "#777",
                }}
              />
            </TouchableOpacity>
          ))}

          <TouchableOpacity onPress={onClose}>
            <Text style={{ color: "#999", textAlign: "center", marginTop: 16 }}>
              CANCEL
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
