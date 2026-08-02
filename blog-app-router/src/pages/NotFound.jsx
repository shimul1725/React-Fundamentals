import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page">
      <h1>404</h1>
      <p className="content">This page doesn't exist.</p>
      <Link to="/">← Back home</Link>
    </div>
  );
}

export default NotFound;