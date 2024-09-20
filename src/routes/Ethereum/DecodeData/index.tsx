import { useCallback, useState } from "react";
import { Button, Divider, Input, message, Space } from "antd";
import { erc1155Abi, erc20Abi, erc721Abi } from "@evm-abis/abis";
import { bufferToHex, stripHexPrefix } from "ethereumjs-util";
import { AbiCoder, keccak256 } from "ethers";
import { useTitle } from "ahooks";
import ProjectInfo from "../../../components/ProjectInfo";

const title = "Decode Ethereum Data";
const noop = () => {};

const { TextArea } = Input;

const commonAbis = [
  {
    label: "ERC 20",
    abi: erc20Abi,
  },
  {
    label: "ERC 721",
    abi: erc721Abi,
  },
  {
    label: "ERC 1155",
    abi: erc1155Abi,
  },
];

const parseJson = (json: any) => {
  try {
    return JSON.stringify(json, null, 2);
  } catch (error) {
    return "";
  }
};

const DecodeData = () => {
  useTitle(title);

  const [ret, setRet] = useState("");
  const [abi, setAbi] = useState(parseJson(commonAbis[0].abi));
  const [data, setData] = useState(
    "0x095ea7b30000000000000000000000001e0049783f008a0085193e00003d00cd54003c7100000000000000000000000000000000000000000000000000000000000186a0",
  );

  const handleDecode = useCallback(() => {
    try {
      const abiArr = JSON.parse(abi);
      const dataBuf = Buffer.from(stripHexPrefix(data), "hex");
      const methodId = bufferToHex(dataBuf.subarray(0, 4));
      let inputsBuf = dataBuf.subarray(4);

      let params;
      let methodSelector;
      let methodDeclare;

      const abiCoder = AbiCoder.defaultAbiCoder();
      const matched = abiArr.some((current: any) => {
        const paramTypes = current?.inputs?.map((param: any) => {
          return param?.type;
        });
        methodSelector = `${current.name}(${paramTypes.join(",")})`;
        const methodSelectorHex = keccak256(Buffer.from(methodSelector)).slice(
          0,
          10,
        );

        if (methodSelectorHex === methodId) {
          methodDeclare = `${current.name}(${current.inputs
            .map((ipt: any) => {
              return `${ipt.type} ${ipt.name}`;
            })
            .join(", ")})`;
          params = [...abiCoder.decode(paramTypes, inputsBuf)].map(String);

          setRet(parseJson({ methodSelector, methodDeclare, params }));
          return true;
        }

        return false;
      });

      if (!matched) {
        return message.error("Decode failed ~");
      }
    } catch (error) {
      message.error("Decode failed ~");
    }
  }, [abi, data]);

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <h1>{title}</h1>

      <div>
        <Divider orientation="left" plain>
          Common Abis
        </Divider>
        <Space>
          {commonAbis.map((abi) => {
            return (
              <Button
                onClick={() => {
                  setAbi(parseJson(abi.abi));
                }}
                key={abi.label}
              >
                {abi.label}
              </Button>
            );
          })}
        </Space>
      </div>

      <TextArea
        placeholder="Please enter the abi ~"
        autoSize={{ minRows: 10, maxRows: 15 }}
        value={abi}
        onChange={(e) => setAbi(e.target.value.trim())}
      />

      <TextArea
        value={data}
        placeholder="Please enter the data ~"
        autoSize={{ minRows: 2, maxRows: 5 }}
        onChange={(e) => setData(e.target.value.trim())}
      />

      <Button type="primary" onClick={handleDecode} disabled={!(abi && data)}>
        Decode
      </Button>

      <TextArea
        placeholder="Click the Decode button above to obtain transaction details"
        autoSize={{ minRows: 10 }}
        value={ret}
        onChange={noop}
      />

      <ProjectInfo url="https://github.com/luoquanquan/tools/tree/main/src/routes/Ethereum/DecodeData" />
    </Space>
  );
};

export default DecodeData;
