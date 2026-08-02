import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import "./App.css";

// ==========================================================
// Ei component ta Provider gulor BHITORE thakte hobe, karon
// eta useTheme()/useAuth() call korche - context ke "consume"
// korche. Shei jonno alada kore likha hoyeche, App theke.
// ==========================================================
function AppContent() {
  const { theme } = useTheme();
  const { user } = useAuth();

  return (
    // theme onujayi ekhane class bodlay - CSS eta dhore
    // shob color/background switch kore dey
    <div className={`app ${theme}`}>
      <Navbar />
      <main className="main">{user ? <Dashboard /> : <LoginForm />}</main>
    </div>
  );
}

// ==========================================================
// APP - Provider diye shob wrap kora hocche ekhane.
// Order matter kore na ei duita context er khetre (ek jon
// onno jonke depend kore na), kintu convention hocche
// "outer most" theke "most specific" - jemon Theme (UI) baire,
// Auth bhitore rakha jete pare, ba ulta o hote pare.
// ==========================================================
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;