import "../App.css";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import DisplayArticleById from "./DisplayArticleById";

import { Routes, Route } from "react-router";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={`/articles/:article_id`}
          element={<DisplayArticleById />}
        />
      </Routes>
    </div>
  );
}

export default App;
