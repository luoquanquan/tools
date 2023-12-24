import { Link, Route, Routes } from "react-router-dom"

import Home from "./routes/Home"
import About from "./routes/About"

const App = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
