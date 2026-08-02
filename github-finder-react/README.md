# GitHub User Finder (React) 🔍

A React rebuild of the original [vanilla JS GitHub User Finder](https://github.com/shimul1725/frontend-fundamentals/tree/main/github-user-finder-App) — same feature set, reimagined with hooks, a custom data-fetching hook, and component composition instead of manual DOM manipulation.

Part of the [React Fundamentals](../) learning series.

## ✨ Features

- Search any GitHub username for profile info (avatar, bio, followers, public repo count)
- Top 4 recent repositories with star counts, linked to GitHub
- Pie chart of language distribution across all public repos (`react-chartjs-2`)
- Loading and "user not found" states
- Cancels stale requests when a new search starts (no race conditions)

## 🎯 What I Practiced

- **`useEffect`** — running a side effect (data fetching) in response to a state change (`searchedUser`), with a cleanup function that aborts in-flight requests
- **Custom hooks** — extracting all fetch logic into `useGithubUser(username)`, so `App.jsx` only consumes `{ userData, repos, loading, error }` without knowing how they're produced
- **`AbortController`** — cancelling a previous fetch when the user searches again quickly, preventing an old response from overwriting a newer one
- **Props** — passing the `repos` array from `App` down to a reusable `LanguageChart` component
- **Component composition** — splitting one large component into `App.jsx` (state + layout) and `LanguageChart.jsx` (a focused, reusable piece of UI)
- **Third-party library integration** — installing and registering `chart.js` + `react-chartjs-2`, and reusing one fetched dataset for two different UI purposes (a repo list slice and a full-data chart)
- **Controlled form input** with `onSubmit` instead of manual `keypress` listeners
- **Conditional rendering** with `&&` instead of manually toggling `innerHTML`

## 🛠️ Built With

- React 18
- Vite
- chart.js + react-chartjs-2
- Vanilla CSS

## 📸 Preview

![React Counter + Todo Preview](docs/banner.png)

## 📂 Project Structure

```
github-finder-react/
├── src/
│   ├── components/
│   │   └── LanguageChart.jsx   ← reusable pie chart component
│   ├── hooks/
│   │   └── useGithubUser.js    ← custom hook: all fetch logic
│   ├── App.jsx                 ← state + layout
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

## 🚀 Running Locally

```bash
git clone https://github.com/shimul1725/React-Fundamentals.git
cd React-Fundamentals/github-finder-react
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## 📝 Notes

This project is a direct comparison point against the vanilla JS version in [Frontend Fundamentals](https://github.com/shimul1725/frontend-fundamentals) — same GitHub API calls, same features, but built with React's declarative, hook-based model instead of manual `fetch` + `innerHTML` updates. The custom `useGithubUser` hook is the main takeaway: reusable data-fetching logic that any component can consume without knowing the implementation details.

## 👤 Author

**Md Moniruzzaman**
- GitHub: [@shimul1725](https://github.com/shimul1725)
- Email: shimul.tu.dortmund@gmail.com