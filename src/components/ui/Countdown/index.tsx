// src/components/ui/Countdown/index.tsx
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import CountdownUnit from "./CountdownUnit";
import Separator from "./Separator";
import { ThemedView } from "@/components/Themed";
import { useCountdown } from "@/context/CountdownContext";

type CountdownProps = {
  size?: number;
  start?: boolean; // controls when it begins
};

type Time = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} | null;

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

export default function Countdown({
  size = 34,
  start = false,
}: CountdownProps) {
  const [time, setTime] = useState<Time>(null);
  const { endTime, ensureEndTime } = useCountdown();

  useEffect(() => {
    if (!start) {
      setTime(null);
      return;
    }

    ensureEndTime(); // create it once globally

    if (!endTime) return;

    let timer: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;

      const { days, hours, minutes, seconds } = getRemaining(endTime);
      setTime({ days, hours, minutes, seconds });

      const now = Date.now();
      const delay = 1000 - (now % 1000);
      timer = setTimeout(tick, delay);
    };

    tick();

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [start, endTime]);

  return (
    <ThemedView style={styles.row}>
      <CountdownUnit value={time?.days ?? null} label="days" size={size} />
      <Separator size={size} />
      <CountdownUnit value={time?.hours ?? null} label="hours" size={size} />
      <Separator size={size} />
      <CountdownUnit value={time?.minutes ?? null} label="min" size={size} />
      <Separator size={size} />
      <CountdownUnit value={time?.seconds ?? null} label="sec" size={size} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
