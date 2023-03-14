import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Article from "./pages/Article";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:name" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;
