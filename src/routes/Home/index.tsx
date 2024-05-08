import { Button, Card, Space } from "antd";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Card title="交易解码" style={{ width: "100%" }}>
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

          <Button
            target="_blank"
            href="https://www.blockchain.com/explorer/assets/btc/decode-transaction"
          >
            BTC signedTx
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
            href="https://www.oklink.com/cn/eth/address/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0/contract"
          >
            ERC 20 写合约
          </Button>
          <Button
            target="_blank"
            href="https://etherscan.io/token/0x95d86db27cac8e332667abbd7c6d545da3e09b48#writeContract"
          >
            ERC 721 写合约
          </Button>
        </Space>
      </Card>
    </Space>
  );
};

export default Home;
