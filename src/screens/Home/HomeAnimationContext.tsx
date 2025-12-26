import { createContext, useRef, useContext } from "react";

type HomeAnimationContextType = {
  animateOnce: boolean;
  markAnimated: () => void;
};

const HomeAnimationContext = createContext<HomeAnimationContextType | null>(
  null
);

export function HomeAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const animatedRef = useRef(false);

  const animateOnce = !animatedRef.current;

  const markAnimated = () => {
    animatedRef.current = true;
  };

  return (
    <HomeAnimationContext.Provider value={{ animateOnce, markAnimated }}>
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
