import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import CountdownUnit from "./CountdownUnit";
import Separator from "./Separator";
import { ThemedView } from "@/components/Themed";

type CountdownProps = { endTime: number; size?: number };

const getRemaining = (end: number) => {
  const total = Math.max(0, end - Date.now());

  const days = Math.floor(total / 1000 / 60 / 60 / 24);
  const hours = Math.floor(total / 1000 / 60 / 60) % 24;
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

export default function Countdown({ endTime, size = 34 }: CountdownProps) {
  const [time, setTime] = useState(() => getRemaining(endTime));

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      setTime(getRemaining(endTime));

      const now = Date.now();
      const delay = 1000 - (now % 1000); // align to second
      timer = setTimeout(tick, delay);
    };

    tick();

    return () => clearTimeout(timer);
  }, [endTime]);

  return (
    <ThemedView style={styles.row}>
      <CountdownUnit value={time.days} label="days" size={size} />
      <Separator size={size} />
      <CountdownUnit value={time.hours} label="hours" size={size} />
      <Separator size={size} />
      <CountdownUnit value={time.minutes} label="min" size={size} />
      <Separator size={size} />
      <CountdownUnit value={time.seconds} label="sec" size={size} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
