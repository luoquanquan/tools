import { Route, Routes } from "react-router-dom";
import DecodeTx from "./DecodeTx";
import DecodeData from "./DecodeData";

const Ethereum = () => {
  return (
    <Routes>
      <Route path="/DecodeTx" element={<DecodeTx />} />
      <Route path="/DecodeData" element={<DecodeData />} />
    </Routes>
  );
};

export default Ethereum;
