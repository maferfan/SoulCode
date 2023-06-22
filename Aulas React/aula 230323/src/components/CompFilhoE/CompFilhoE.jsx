import "./CompFilhoE.css";
import { useContext } from "react";
import { BatataContext } from "../../context/BatataContext";

export function CompFilhoE({ valor }) {
  const batata = useContext(BatataContext)
  return <div className="filho-e">
    <h3>FILHO E</h3>
    <p>{batata}</p>
  </div>;
}
