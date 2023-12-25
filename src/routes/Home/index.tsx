import { Button, Card, Space } from "antd";

const Home = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Card title="交易解码" style={{ width: "100%" }}>
        <Space>
          <Button
            target="_blank"
            href="https://flightwallet.github.io/decode-eth-tx/"
          >
            ETH 交易解码
          </Button>
          <Button
            target="_blank"
            href="https://www.blockchain.com/explorer/assets/btc/decode-transaction"
          >
            BTC 交易解码
          </Button>
        </Space>
      </Card>
      <Card title="工具" style={{ width: "100%" }}>
        <Space>
          <Button target="_blank" href="https://disperse.app/">
            批量转账
          </Button>
          <Button target="_blank" href="https://iancoleman.io/bip39/">
            bip 39
          </Button>
          <Button target="_blank" href="https://www.json.cn/">
            json.cn
          </Button>
          <Button
            target="_blank"
            href="https://lab.miguelmota.com/ethereum-input-data-decoder/example/"
          >
            ETH inputData decoder
          </Button>
        </Space>
      </Card>
    </Space>
  );
};

export default Home;
