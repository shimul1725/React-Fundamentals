import { createContext, useContext, useState } from "react";

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  // user null hole "logged out", object hole "logged in"
  const [user, setUser] = useState(null);

  // Real app e eta backend e API call korto (JWT token check kore),
  // ekhon shudhu Context API demo korar jonno simulate korchi
  function login(username) {
    if (username.trim() === "") return;
    setUser({ name: username.trim() });
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }

  return context;
}