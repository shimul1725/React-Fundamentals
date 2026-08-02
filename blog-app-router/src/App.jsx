import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import "./App.css";

// ==========================================================
// BrowserRouter - pura app ke "routing aware" kore, mane URL
// bodlale React eta track korte pare. Shob route er baire e
// eta thakte hoy (ekhane amra App component nijei wrap kore dei).
//
// Routes - ekta "switch" er moto, URL onujayi shudhu MATCHING
// ekta Route render kore, baki gulo na.
//
// Route - "path" ar "element" er mapping: ei URL e ei
// component dekhao.
//
// ":slug" - path e ':' diye shuru mane eta "dynamic segment" -
// jekono value hote pare, PostDetail component e useParams()
// diye seta pora jay.
//
// path="*" - kono upor er route match na korle, eta "catch-all"
// hishebe 404 page dekhay. Eta shobsomoy SHESH e rakhte hoy.
// ==========================================================
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<PostDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;