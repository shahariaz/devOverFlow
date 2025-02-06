"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
interface ThemeContextType {
  theme?: string;
  setTheme: (mode: string) => void;
  handleThemeChange: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");
  const handleThemeChange = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.add("light");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  };
  useEffect(() => {
    handleThemeChange();
  }, [setTheme]);
  return (
    <ThemeContext.Provider value={{ setTheme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
