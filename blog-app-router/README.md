# Multi-page Blog App (React Router) 📝

An editorial-style blog with client-side routing — a home feed, dynamic post detail pages, an about page, and a 404 fallback, all built with React Router.

Part of the [React Fundamentals](../) learning series.

## ✨ Features

- Home page listing all blog posts
- Dynamic post detail pages (`/post/:slug`) with a "Go back" button
- About page and a custom 404 for unmatched routes
- Client-side navigation — no full page reloads when moving between pages
- Editorial design: serif/sans font pairing, warm paper background, hover reveal accent bar on post cards

## 🎯 What I Practiced

- **`BrowserRouter`, `Routes`, `Route`** — mapping URLs to components in a single-page app
- **`<Link>` vs `<a>`** — client-side navigation that preserves React state, instead of a full browser reload
- **`useParams()`** — reading the dynamic `:slug` segment from the URL to find and display the matching post
- **`useNavigate()`** — redirecting programmatically (`navigate(-1)` for a "Go back" button, functioning like the browser's own back button)
- **Catch-all routes (`path="*"`)** — building a 404 page for any URL that doesn't match a defined route
- **Data integrity** — learned the hard way why array items need unique identifiers (a duplicated `slug` broke `.map()` keys and made `.find()` always return the first match)
- **Debugging a real Vite bug** — Vite's default `index.css` assumes a dark background and sets light text color, making headings invisible on a light background; fixed by cleaning up the base stylesheet
- **Editorial CSS** — Google Fonts pairing (serif headings + sans body), `ch`-based `max-width` for readable line lengths, hover-revealed accent bars instead of boxed cards

## 🛠️ Built With

- React 18
- Vite
- react-router-dom
- Vanilla CSS (Google Fonts: Fraunces + Inter)

## 📸 Preview

![React Counter + Todo Preview](docs/banner.png)

## 📂 Project Structure

```
blog-app-router/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── PostDetail.jsx
│   │   ├── About.jsx
│   │   └── NotFound.jsx
│   ├── data/
│   │   └── posts.js        ← blog post data (mock, no backend)
│   ├── App.jsx              ← route definitions
│   ├── App.css
│   └── index.css
├── index.html
├── package.json
└── README.md
```

## 🚀 Running Locally

```bash
git clone https://github.com/shimul1725/React-Fundamentals.git
cd React-Fundamentals/blog-app-router
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## 📝 Notes

The blog data lives in a plain JS array (`src/data/posts.js`) rather than a real backend — the focus here was routing, not data fetching (that was covered in the GitHub Finder project). A natural next step would be swapping this static array for a real API and combining it with the `useGithubUser`-style custom hook pattern.

## 👤 Author

**Md Moniruzzaman**
- GitHub: [@shimul1725](https://github.com/shimul1725)
- Email: shimul.tu.dortmund@gmail.com