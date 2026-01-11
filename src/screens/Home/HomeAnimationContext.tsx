import { createContext, useRef, useContext, useState } from "react";

type HomeAnimationContextType = {
  animateOnce: boolean;
  markAnimated: () => void;
  countdownDone: boolean;
  setCountdownDone: (value: boolean) => void;
  challengeReady: boolean;
  setChallengeReady: (value: boolean) => void;
};

const HomeAnimationContext = createContext<HomeAnimationContextType | null>(
  null
);

export function HomeAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [challengeReady, setChallengeReady] = useState(false);
  const [countdownDone, setCountdownDone] = useState(false);
  const animatedRef = useRef(false);

  const animateOnce = !animatedRef.current;

  const markAnimated = () => {
    animatedRef.current = true;
  };

  return (
    <HomeAnimationContext.Provider
      value={{
        animateOnce,
        markAnimated,
        countdownDone,
        setCountdownDone,
        challengeReady,
        setChallengeReady,
      }}
    >
      {children}
    </HomeAnimationContext.Provider>
  );
}

export function useHomeAnimation() {
  const ctx = useContext(HomeAnimationContext);
  if (!ctx) {
    throw new Error(
      "useHomeAnimation must be used within HomeAnimationProvider"
    );
  }
  return ctx;
}
