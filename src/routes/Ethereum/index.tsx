import { Route, Routes } from "react-router-dom";
import DecodeTx from "./DecodeTx";

const Ethereum = () => {
  return (
    <Routes>
      <Route path="/DecodeTx" element={<DecodeTx />} />
    </Routes>
  );
};

export default Ethereum;
