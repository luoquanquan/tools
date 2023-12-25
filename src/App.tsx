import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";

const App = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
