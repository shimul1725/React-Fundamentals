import { Link } from "react-router-dom";
import posts from "../data/posts";

function Home() {
  return (
    <div className="page">
      <h1>Latest Posts</h1>

      <div className="post-list">
        {posts.map((post) => (
          // Protyekta post card e Link diye tar nijer detail page e
          // niye jai - "to" er bhitore post.slug diye dynamic URL banai
          <Link to={`/post/${post.slug}`} key={post.slug} className="post-card">
            <h2>{post.title}</h2>
            <p className="excerpt">{post.excerpt}</p>
            <span className="meta">
              {post.author} · {post.date}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;