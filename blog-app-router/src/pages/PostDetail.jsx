import { useParams, useNavigate, Link } from "react-router-dom";
import posts from "../data/posts";

function PostDetail() {
  // ==========================================================
  // useParams() - URL er dynamic part (:slug) ke object hishebe
  // dey. Route define kora ache "/post/:slug" hishebe (App.jsx e),
  // tai user "/post/learning-react-router" e gele,
  // useParams() { slug: "learning-react-router" } return kore
  // ==========================================================
  const { slug } = useParams();

  // ==========================================================
  // useNavigate() - button click er moto kono action e
  // "programmatically" onno route e niye jaoar jonno. Link
  // component e user nijei click kore, kintu useNavigate()
  // e amra code diye redirect korai (jemon "Go back" button)
  // ==========================================================
  const navigate = useNavigate();

  const post = posts.find((p) => p.slug === slug);

  // Jodi emon slug er post na thake (URL手 change kore invalid
  // slug dile), user-friendly message dekhai
  if (!post) {
    return (
      <div className="page">
        <p>Post not found.</p>
        <Link to="/">← Back to all posts</Link>
      </div>
    );
  }

  return (
    <div className="page">
      {/* navigate(-1) - browser history te "ekta pichhe jao",
          exactly browser er Back button er moto */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Go back
      </button>

      <h1>{post.title}</h1>
      <span className="meta">
        {post.author} · {post.date}
      </span>
      <p className="content">{post.content}</p>
    </div>
  );
}

export default PostDetail;