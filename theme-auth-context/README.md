# Theme + Auth Context App 🎨

A demo app showing how React's Context API solves prop drilling — a light/dark theme toggle and a simulated login system, both accessible from any component without passing props down manually.

Part of the [React Fundamentals](../) learning series.

## ✨ Features

- Light/dark theme toggle that affects the entire app instantly
- Simulated login (type any name — no backend, this is a Context API demo)
- Dashboard shown only when "logged in", login form shown otherwise
- Both theme and auth state are shared globally, consumed directly by whichever component needs them

## 🎯 What I Practiced

- **`createContext()`** — creating a shared "channel" for data that any nested component can read
- **The Provider pattern** — wrapping part of the component tree in `<Context.Provider value={...}>` to make that data available below
- **`useContext()` wrapped in a custom hook** — `useTheme()` / `useAuth()` instead of calling `useContext(ThemeContext)` directly everywhere, with an error thrown if used outside its Provider
- **Solving prop drilling** — `Navbar`, `LoginForm`, and `Dashboard` all read `theme`/`user` directly, with no prop passed down from `App`
- **Nesting multiple Providers** — `ThemeProvider` wrapping `AuthProvider` wrapping the rest of the app
- **CSS variables driven by state** — a `theme` class (`app light` / `app dark`) toggled by React, with all colors defined once per theme in CSS
- **Conditional rendering based on global state** — showing `Dashboard` or `LoginForm` depending on whether `user` exists in `AuthContext`

## 🛠️ Built With

- React 18 (Context API)
- Vite
- Vanilla CSS

## 📸 Preview

![React Counter + Todo Preview](docs/banner.png)

## 📂 Project Structure

```
theme-auth-context/
├── src/
│   ├── context/
│   │   ├── ThemeContext.jsx
│   │   └── AuthContext.jsx
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── LoginForm.jsx
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── package.json
└── README.md
```

## 🚀 Running Locally

```bash
git clone https://github.com/shimul1725/React-Fundamentals.git
cd React-Fundamentals/theme-auth-context
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## 📝 Notes

This project completes the **React Fundamentals** series — useState, useEffect + custom hooks, React Router, and now Context API. The auth here is simulated client-side only; a real version would call a backend, store a JWT, and use Context to hold the decoded user + token instead of a plain name string. That's a natural bridge into combining this with a Node.js/Express backend next.

## 👤 Author

**Md Moniruzzaman**
- GitHub: [@shimul1725](https://github.com/shimul1725)
- Email: shimul.tu.dortmund@gmail.com