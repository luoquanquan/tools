import { Button, Card, Space } from "antd";

const Tools = () => {
  return (
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
        <Button target="_blank" href="https://base64.guru/">
          Base64 工具
        </Button>
      </Space>
    </Card>
  );
};

export default Tools;
