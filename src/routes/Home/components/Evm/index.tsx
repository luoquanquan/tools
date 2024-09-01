import { Button, Card, Space } from "antd";
import { Link } from "react-router-dom";

const Evm = () => {
  return (
    <Card title="Evm" style={{ width: "100%" }}>
      <Space>
        <Link to="/Ethereum/DecodeData">
          <Button>Decode Data</Button>
        </Link>

        <Link to="/Ethereum/DecodeTx">
          <Button>Decode Ethereum Tx</Button>
        </Link>
      </Space>
    </Card>
  );
};

export default Evm;
