// src/components/Challenge/ChallengeAnimationContext.ts
import { createContext, useContext } from "react";

type ChallengeAnimationContextType = {
  notifyGroupButtonEntered?: () => void;
};

const ChallengeAnimationContext =
  createContext<ChallengeAnimationContextType | null>(null);

export function useChallengeAnimation() {
  const ctx = useContext(ChallengeAnimationContext);
  if (!ctx) {
    throw new Error(
      "useChallengeAnimation must be used within ChallengeAnimationProvider"
    );
  }
  return ctx;
}

export const ChallengeAnimationProvider = ChallengeAnimationContext.Provider;
