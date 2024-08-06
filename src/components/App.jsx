import "../App.css";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";

import { Routes, Route } from "react-router";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
