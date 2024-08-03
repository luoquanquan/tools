import { Space } from "antd";

import Evm from "./components/Evm";
import Btc from "./components/Btc";
import Ton from "./components/Ton";
import Tools from "./components/Tools";

const Home = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Evm />
      <Btc />
      <Ton />
      <Tools />
    </Space>
  );
};

export default Home;
