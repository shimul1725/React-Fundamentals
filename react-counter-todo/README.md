# React Counter + Todo (useState) ⚛️

The first project in the React Fundamentals series — a Counter and a Todo List built as separate components, both powered by the `useState` hook. This is a React rebuild of concepts first practiced in vanilla JavaScript (see the `todo-app` project in [Frontend Fundamentals](https://github.com/shimul1725/frontend-fundamentals)).

Part of the **React Fundamentals** learning series.

## ✨ Features

- **Counter**: increment, decrement, and reset a number
- **Todo List**: add, complete (checkbox), and delete tasks
- Both components share one page but manage completely independent state

## 🎯 What I Practiced

- **`useState` hook** — the core building block of component state in React
- **Component composition** — building `Counter` and `Todo` as separate functions, then combining them inside a parent `App` component
- **JSX fundamentals** — embedding JS expressions with `{}`, using `className` instead of `class`
- **Immutability** — updating arrays with the spread operator (`[...todos, newTodo]`) instead of mutating with `.push()`, since React detects state changes by reference
- **Controlled inputs** — syncing an `<input>`'s value to state via `value` + `onChange`, instead of reading `.value` imperatively like in vanilla JS
- **Rendering lists with `.map()`** and the importance of a stable `key` prop for each item
- **Comparing mental models**: vanilla JS requires manually calling a `render()` function after every state change; React re-renders automatically when `setState` is called

## 🛠️ Built With

- React 18
- Vite (dev server + build tool)
- Vanilla CSS

## 📸 Preview

![React Counter + Todo Preview](docs/banner.png)

## 📂 Project Structure

```
react-counter-todo/
├── src/
│   ├── App.jsx       ← Counter + Todo components
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## 🚀 Running Locally

```bash
git clone https://github.com/shimul1725/React-Fundamentals.git
cd React-Fundamentals/react-counter-todo
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## 📝 Notes

This project marks the shift from Vanilla JS DOM manipulation to React's declarative, state-driven rendering model. Next up: rebuilding the GitHub User Finder in React, introducing the `useEffect` hook for data fetching.

## 👤 Author

**Md Moniruzzaman**
- GitHub: [@shimul1725](https://github.com/shimul1725)
- Email: shimul.tu.dortmund@gmail.com