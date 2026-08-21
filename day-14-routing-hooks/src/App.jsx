import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import User from "./pages/users";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users/1">User 1</Link>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/users/:id" element={<User />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;