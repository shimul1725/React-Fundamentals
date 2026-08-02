import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

function Dashboard() {
  const { user } = useAuth();
  const { theme } = useTheme();

  return (
    <div className="dashboard-card">
      <h2>Welcome, {user.name}! 👋</h2>
      <p>
        You're logged in, and the current theme is{" "}
        <strong>{theme}</strong>. Both of these came from Context —
        no props were passed down to get here.
      </p>
    </div>
  );
}

export default Dashboard;