import { createContext, useContext, useState } from "react";

// ==========================================================
// createContext() - ekta "chhoto database" toiri kore jeta
// pura component tree e jekono jaigay theke access kora jay,
// props diye niche pathano chara. Argument (undefined) hocche
// "default value" jodi kono Provider na thake.
// ==========================================================
const ThemeContext = createContext(undefined);

// ==========================================================
// PROVIDER COMPONENT
// Eta ekta wrapper component - "children" prop e joto component
// er bhitore eta bosano hobe, shobai ei context er value pabe.
// App.jsx e amra shob kichu ei <ThemeProvider> diye wrap korbo.
// ==========================================================
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  // value prop e ja dei, seta e context er bhitore available thakbe
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ==========================================================
// CUSTOM HOOK - useContext(ThemeContext) protyekbar direct
// likhar bodole, ekta shoja hook banai. Eta ekta common React
// pattern: context + custom hook ekshathe export kora.
// ==========================================================
export function useTheme() {
  const context = useContext(ThemeContext);

  // Jodi keu <ThemeProvider> er baire ei hook call kore, tahole
  // context undefined thakbe - eta shathe shathe dhore error dei,
  // na hole pore confusing bug hoy
  if (context === undefined) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }

  return context;
}