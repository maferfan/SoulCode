import { useContext } from "react";
import { BatataContext } from "../../contexts/BatataContext";
import "./CompFilhoB.css";

export function CompFilhoB() {
  const resultado = useContext(BatataContext);

  return (
    <div className="filho-b">
      <h3>FILHO B</h3>
      <p className="text-warning">{resultado}</p>
    </div>
  );
}
