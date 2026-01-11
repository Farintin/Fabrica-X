// src/context/CountdownContext.tsx
import { createContext, useContext, useState } from "react";

type CountdownContextValue = {
  endTime: number | null;
  ensureEndTime: () => Promise<void>;
};

const CountdownContext = createContext<CountdownContextValue | null>(null);

const fetchEndTime = async () => {
  const endTime = Date.now() + 1000 * 60 * 60 * 24 * 4;
  return endTime;
};

export function CountdownProvider({ children }: { children: React.ReactNode }) {
  const [endTime, setEndTime] = useState<number | null>(null);

  const ensureEndTime = async () => {
    if (endTime) return; // already set → do nothing

    const fetched = await fetchEndTime();
    setEndTime((prev) => prev ?? fetched);
  };

  return (
    <CountdownContext.Provider value={{ endTime, ensureEndTime }}>
      {children}
    </CountdownContext.Provider>
  );
}

export function useCountdown() {
  const ctx = useContext(CountdownContext);
  if (!ctx)
    throw new Error("useCountdown must be used within CountdownProvider");
  return ctx;
}
