import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Ethereum from "./routes/Ethereum";
import { Card, Descriptions, Space } from "antd";

const App = () => {
  return (
    <Space direction="vertical" style={{ paddingTop: "24px" }}>
      <Routes>
        <Route path="/Ethereum/*" element={<Ethereum />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Card title="Project Info">
        <Descriptions
          layout="vertical"
          items={[
            {
              key: "github",
              label: "github",
              children: (
                <a href={"https://github.com/luoquanquan/tools"}>
                  https://github.com/luoquanquan/tools
                </a>
              ),
            },
          ]}
        />
      </Card>
    </Space>
  );
};

export default App;
