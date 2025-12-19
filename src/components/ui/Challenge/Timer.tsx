import { StyleSheet, Text, View, ViewProps } from "react-native";

export default function Timer({ style }: ViewProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.timeBox}>
        <Text style={styles.time}>03</Text>
        <Text style={styles.label}>days</Text>
      </View>
      <Text style={[styles.time, styles.columnSymbol]}>:</Text>
      <View style={styles.timeBox}>
        <Text style={styles.time}>10</Text>
        <Text style={styles.label}>hours</Text>
      </View>
      <Text style={[styles.time, styles.columnSymbol]}>:</Text>
      <View style={styles.timeBox}>
        <Text style={styles.time}>20</Text>
        <Text style={styles.label}>min</Text>
      </View>
      <Text style={[styles.time, styles.columnSymbol]}>:</Text>
      <View style={styles.timeBox}>
        <Text style={styles.time}>45</Text>
        <Text style={styles.label}>sec</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  timeBox: {
    alignItems: "center",
    paddingHorizontal: 8,
  },
  time: {
    fontFamily: "Poppins-Medium",
    fontSize: 32,
    lineHeight: 36,
    letterSpacing: -1,
    color: "#fff",
  },
  label: {
    fontFamily: "Poppins-Medium",
    fontSize: 11,
    lineHeight: 12,
    letterSpacing: 0,
    color: "rgba(245, 245, 245, .7)",
    textTransform: "capitalize",
  },
  columnSymbol: { fontSize: 34, marginTop: -2, marginHorizontal: 2 },
});
