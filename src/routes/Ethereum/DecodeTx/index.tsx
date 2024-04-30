import { TransactionFactory } from "@ethereumjs/tx";
import { Button, Input, Space } from "antd";
import { useCallback, useState } from "react";

const { TextArea } = Input;

const defaultSerializedTx =
  "0x02f8728189078506fc23ac008507a1e65d40825208945c3c80db8b05601f46c35b79f5c6ff3ef6f703fc85e8d4a5100080c080a0fcf9285bf62348f8a553ce88b0ff7531936f50625b72dd7559a008b562515cc7a017e51dff3a2cbae464a02a85db14f7b0d607ad40b835976a65aa22176ec9632f";

const DecodeTx = () => {
  const [serializedTx, setSerializedTx] = useState(defaultSerializedTx);

  const handleDecode = useCallback(() => {
    console.log(`Current log: serializedTx: `, serializedTx);
    // 验签 - 用户可能在签名时输入了和导入时不一样的 passPhrase, 导致广播异常
    const bufTx = Buffer.from(serializedTx, "hex");
    const signedTx = TransactionFactory.fromSerializedData(bufTx);
    const realFrom = signedTx.getSenderAddress().toString();
    console.log(`Current log: realFrom: `, realFrom);
  }, [serializedTx]);

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <h1>Decode Serialized Ethereum Tx</h1>
      <TextArea
        placeholder="Please enter the serialized transaction"
        autoSize={{ minRows: 3, maxRows: 5 }}
        value={serializedTx}
        onChange={(e) => setSerializedTx(e.target.value.trim())}
      />

      <Button type="primary" onClick={handleDecode} disabled={!serializedTx}>
        Decode
      </Button>

      <TextArea
        placeholder="Click the Decode button above to obtain transaction details"
        autoSize={{ minRows: 10 }}
        value={serializedTx}
        onChange={() => {}}
      />
    </Space>
  );
};

export default DecodeTx;
