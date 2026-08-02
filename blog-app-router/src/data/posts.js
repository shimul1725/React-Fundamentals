// ==========================================================
// Fake blog data - real project e eta backend API theke ashto,
// kintu React Router shekhar jonno ekhon shudhu ekta array e
// hardcode kore rakhchi
// ==========================================================
const posts = [
  {
    slug: "why-i-started-coding",
    title: "Why I Started Coding",
    excerpt: "My journey from curiosity to building full-stack apps.",
    content:
      "It started with a simple 'how does this website work' question. That curiosity turned into late nights learning HTML and CSS, then JavaScript, and eventually building full applications with the MERN stack. The best part hasn't been the code itself, but the problem-solving mindset it builds.",
    author: "Md Moniruzzaman",
    date: "2026-01-15",
  },
  {
    slug: "learning-react-router",
    title: "Learning React Router",
    excerpt: "Understanding client-side routing and dynamic URLs.",
    content:
      "React Router lets a single-page app feel like it has multiple pages, without a full browser reload. The key pieces are Routes (which URL maps to which component), Link (client-side navigation instead of <a> tags), useParams (reading dynamic URL segments), and useNavigate (redirecting programmatically).",
    author: "Md Moniruzzaman",
    date: "2026-02-02",
  },
  {
    slug: "vanilla-js-vs-react",
    title: "Vanilla JS vs React: What Actually Changes",
    excerpt: "Comparing the mental models after rebuilding the same app twice.",
    content:
      "Rebuilding the GitHub Finder app in React after building it in vanilla JS made the difference click. Vanilla JS is imperative: you tell the browser exactly what to change, step by step. React is declarative: you describe what the UI should look like for a given state, and React figures out the DOM updates.",
    author: "Md Moniruzzaman",
    date: "2026-02-20",
  },
  {
    slug: "understanding-custom-hooks",
    title: "Understanding Custom Hooks",
    excerpt: "How pulling logic out of a component makes it reusable.",
    content:
      "A custom hook is just a regular function that starts with 'use' and calls other hooks inside it. Extracting the GitHub Finder's fetch logic into useGithubUser() meant the component only had to ask for data, not know how it was fetched. That separation is the whole point: logic becomes portable, testable, and reusable across components.",
    author: "Md Moniruzzaman",
    date: "2026-03-05",
  },
];

export default posts;