import { Space } from "antd";
import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Ethereum from "./routes/Ethereum";

const App = () => {
  return (
    <Space direction="vertical" style={{ paddingTop: "24px" }}>
      <Routes>
        <Route path="/Ethereum/*" element={<Ethereum />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Space>
  );
};

export default App;
