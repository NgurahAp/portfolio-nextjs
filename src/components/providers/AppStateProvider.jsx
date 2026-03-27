"use client";

import { createContext, useContext, useMemo, useState } from "react";

const AppStateContext = createContext(null);

export function AppStateProvider({ children }) {
  const [hasSeenSplash, setHasSeenSplash] = useState(false);

  const value = useMemo(
    () => ({
      hasSeenSplash,
      markSplashSeen: () => setHasSeenSplash(true),
    }),
    [hasSeenSplash],
  );

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error("useAppState must be used within AppStateProvider");
  }

  return context;
}
