import { Button, Card, Space } from "antd";

const Btc = () => {
  return (
    <Card title="Btc" style={{ width: "100%" }}>
      <Space>
        <Button
          target="_blank"
          href="https://www.blockchain.com/explorer/assets/btc/decode-transaction"
        >
          BTC signedTx
        </Button>
      </Space>
    </Card>
  );
};

export default Btc;
