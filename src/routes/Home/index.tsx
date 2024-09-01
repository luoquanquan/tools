import { Space } from "antd";

import Evm from "./components/Evm";
import Btc from "./components/Btc";
import Ton from "./components/Ton";
import Tools from "./components/Tools";
import ProjectInfo from "../../components/ProjectInfo";

const Home = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Evm />
      <Btc />
      <Ton />
      <Tools />

      <ProjectInfo />
    </Space>
  );
};

export default Home;
