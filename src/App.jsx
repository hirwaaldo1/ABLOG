import { Route, Routes } from "react-router-dom";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:publisher/article" element={<Articles />} />
      <Route path="/article/:name" element={<Article />} />
    </Routes>
  );
}
