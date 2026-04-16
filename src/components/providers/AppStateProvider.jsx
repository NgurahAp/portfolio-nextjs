"use client";

import { createContext, useContext, useMemo, useState, useEffect } from "react";

const AppStateContext = createContext(null);

export function AppStateProvider({ children }) {
  const [hasSeenSplash, setHasSeenSplash] = useState(true); // Default true untuk avoid flash

  // Load dari localStorage saat mount
  useEffect(() => {
    const seen = localStorage.getItem("hasSeenSplash");
    setHasSeenSplash(seen === "true");
  }, []);

  const markSplashSeen = () => {
    setHasSeenSplash(true);
    localStorage.setItem("hasSeenSplash", "true");
  };

  const value = useMemo(
    () => ({
      hasSeenSplash,
      markSplashSeen,
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
