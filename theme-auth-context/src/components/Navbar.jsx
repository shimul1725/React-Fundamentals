import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

// ==========================================================
// Ekhane lokkho korun - Navbar component-e kono "theme" ba
// "user" prop pathano hoyni! Shudhu useTheme() ar useAuth()
// call korei dutu context theke direct data pawa jacche.
// Eta e Context API-r shokti - "prop drilling" (App -> Layout
// -> Navbar emon proti layer e prop pathano) lage na.
// ==========================================================
function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <span className="logo">🎨 ThemeAuth Demo</span>

      <div className="nav-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

        {user && (
          <div className="user-info">
            <span>👤 {user.name}</span>
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;