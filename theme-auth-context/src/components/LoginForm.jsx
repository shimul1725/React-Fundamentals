import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function LoginForm() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    login(username);
  }

  return (
    <div className="login-card">
      <h2>Login</h2>
      <p className="hint">Type any name — this is a simulated login.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name..."
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default LoginForm;