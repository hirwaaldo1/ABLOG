import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:publisher/article" element={<Articles />} />
        <Route path="/article/:name" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;
