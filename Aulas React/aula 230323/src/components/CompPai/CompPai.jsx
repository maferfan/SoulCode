import { Button } from "react-bootstrap";
import { useState } from "react";
import { CompFilhoA } from "../CompFilhoA/CompFilhoA";
import { CompFilhoB } from "../CompFilhoB/CompFilhoB";
import "./CompPai.css";
import { BatataContext } from "../../context/BatataContext";

export function CompPai() {
  const [batata, setBatata] = useState('batata');

  return <div className="pai">
    <h1>PAI</h1>
    <p>{batata}</p>

    <Button className="mb-3" onClick={() => setBatata(batata + 'a')}>TEXT  </Button>
    <BatataContext.Provider value={batata}>
      <CompFilhoA />
      <CompFilhoB />
    </BatataContext.Provider>




  </div>;
}
