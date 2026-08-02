import { useState, useEffect } from "react";

// ==========================================================
// CUSTOM HOOK: useGithubUser
//
// Ekta "custom hook" hocche shudhu ekta normal JS function,
// je onno hook (useState, useEffect) use kore, ar naam
// obossoi "use" diye shuru hoy (eta React er convention,
// er maddhome React bujhte pare eta ekta hook, normal
// function na).
//
// Ei hook-er kaj: GitHub username dile, seta die fetch
// koraia userData, repos, loading, error - shob e return kore.
// App.jsx ekhon ei hook call korei shob pabe, নিজে fetch
// logic likhte hobe na.
//
// EITAI REUSABILITY-r shokti: ei hook ke onno kono component
// e (dhori, ekta "Compare Two Users" feature banale) abar
// use korte parben, kono code copy-paste na kore.
// ==========================================================
function useGithubUser(username) {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError(null);
      setUserData(null);
      setRepos([]);

      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`, {
          signal: controller.signal,
        });

        if (!userRes.ok) throw new Error("User not found");
        const user = await userRes.json();

        const reposRes = await fetch(
          `https://api.github.com/users/${username}/repos?sort=created&per_page=100`,
          { signal: controller.signal }
        );
        const repoList = await reposRes.json();

        setUserData(user);
        setRepos(repoList);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => controller.abort();
  }, [username]); // shudhu username bodlale re-run hobe

  // Hook theke ekta object return korchi - jeta call korbe,
  // seta destructure kore proyojonio value ber korte parbe
  return { userData, repos, loading, error };
}

export default useGithubUser;