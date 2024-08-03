import { Button, Card, Space } from "antd";

const Ton = () => {
  return (
    <Card title="Ton" style={{ width: "100%" }}>
      <Space>
        <Button target="_blank" href="https://ton.org/address/">
          Ton 地址类型转换
        </Button>
      </Space>
    </Card>
  );
};

export default Ton;
