import { useState } from "react";
import useGithubUser from "./hooks/useGithubUser";
import LanguageChart from "./components/LanguageChart";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [searchedUser, setSearchedUser] = useState(null);

  // ==========================================================
  // Shob fetch logic ekhon custom hook er bhitore lukano -
  // App component ekhon shudhu "ki dorkar" bole dey, "kivabe
  // pete hobe" seta hook e handled. Eta React e bola hoy
  // "separation of concerns" - UI ar data-fetching logic
  // alada kore rakha.
  // ==========================================================
  const { userData, repos, loading, error } = useGithubUser(searchedUser);

  function handleSearch(e) {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setSearchedUser(inputValue.trim());
  }

  return (
    <div className="container">
      <h1>GitHub User Finder (React) 🔍</h1>

      <form className="search-box" onSubmit={handleSearch}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter GitHub username..."
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p className="loading">Searching for "{searchedUser}"...</p>}
      {error && <p className="error">❌ {error}</p>}

      {userData && !loading && (
        <div className="card">
          <img src={userData.avatar_url} alt={userData.login} />
          <h2>{userData.name || userData.login}</h2>
          <p>@{userData.login}</p>
          <p>{userData.bio ? userData.bio : "No bio available."}</p>

          <div className="stats">
            <span>👥 Followers: {userData.followers}</span>
            <span>📦 Repos: {userData.public_repos}</span>
          </div>

          <div className="repos">
            <h3>Recent Repositories:</h3>
            {repos.length > 0 ? (
              // .slice(0, 4) diye shudhu prothom 4-ta dekhai list e,
              // kintu LanguageChart e (niche) pura "repos" array pathai -
              // ekoi data duibhabe use hocche, alada fetch lage na
              repos.slice(0, 4).map((repo) => (
                <div className="repo-item" key={repo.id}>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    {repo.name}
                  </a>
                  <span>⭐ {repo.stargazers_count}</span>
                </div>
              ))
            ) : (
              <p>No repositories found.</p>
            )}
          </div>

          {/* LanguageChart component ke "repos" prop hishebe pura
              array pathaccho - eta nijer bhitore language count kore nibe */}
          <LanguageChart repos={repos} />
        </div>
      )}
    </div>
  );
}

export default App;