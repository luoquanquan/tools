import { Button, Card, Space } from "antd";
import { Link } from "react-router-dom";

const Evm = () => {
  return (
    <Card title="Evm" style={{ width: "100%" }}>
      <Space>
        <Button
          target="_blank"
          href="https://lab.miguelmota.com/ethereum-input-data-decoder/example/"
        >
          ETH inputData
        </Button>

        <Link to="/Ethereum/DecodeTx">
          <Button>Decode Ethereum Tx</Button>
        </Link>
      </Space>
    </Card>
  );
};

export default Evm;
