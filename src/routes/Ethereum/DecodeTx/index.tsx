import { Button, Input, Space } from "antd";
import { useCallback, useState } from "react";
import { stripHexPrefix } from "ethereumjs-util";
import { TransactionFactory } from "@ethereumjs/tx";
import ProjectInfo from "../../../components/ProjectInfo";
import { useTitle } from "ahooks";

const title = "Decode Ethereum Tx";

const { TextArea } = Input;

const defaultSerializedTx =
  "0x02f8728189078506fc23ac008507a1e65d40825208945c3c80db8b05601f46c35b79f5c6ff3ef6f703fc85e8d4a5100080c080a0fcf9285bf62348f8a553ce88b0ff7531936f50625b72dd7559a008b562515cc7a017e51dff3a2cbae464a02a85db14f7b0d607ad40b835976a65aa22176ec9632f";

const DecodeTx = () => {
  useTitle(title);

  const [ret, setRet] = useState("");
  const [serializedTx, setSerializedTx] = useState(defaultSerializedTx);

  const handleDecode = useCallback(() => {
    const bufTx = Buffer.from(stripHexPrefix(serializedTx), "hex");
    const tx = TransactionFactory.fromSerializedData(bufTx);
    const txJson = tx.toJSON();
    const txObj: any = {
      ...txJson,
      isSigned: tx.isSigned(),
    };
    if (txObj.isSigned) {
      txObj.from = tx.getSenderAddress().toString();
    }

    const txRaw = JSON.stringify(txObj, null, 2);

    setRet(txRaw);
  }, [serializedTx]);

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <h1>{title}</h1>
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
        value={ret}
        onChange={() => {}}
      />

      <ProjectInfo url="https://github.com/luoquanquan/tools/tree/main/src/routes/Ethereum/DecodeTx" />
    </Space>
  );
};

export default DecodeTx;
