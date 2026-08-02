import { Link } from "react-router-dom";

// ==========================================================
// <Link> vs <a> - eta React Router er shobcheye important
// jinis. <a href="/about"> click korle browser PURA page
// reload kore, React er state harai jay. <Link to="/about">
// click korle React Router shudhu URL bodlay ar matching
// component render kore - kono page reload hoy na.
// ==========================================================
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        📝 DevBlog
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;