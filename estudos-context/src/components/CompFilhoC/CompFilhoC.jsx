import { CompFilhoD } from "../CompFilhoD/CompFilhoD";
import { CompFilhoE } from "../CompFilhoE/CompFilhoE";
import "./CompFilhoC.css";

export function CompFilhoC() {
  return (
    <div className="filho-c">
      <h3>FILHO C</h3>
      <CompFilhoD />
      <CompFilhoE />
    </div>
  );
}
