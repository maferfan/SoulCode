import { useContext } from "react";
import { Button } from "react-bootstrap";
import { BatataContext } from "../../context/BatataContext";
import "./CompFilhoD.css";

export function CompFilhoD() {

  const batata = useContext(BatataContext);

  return <div className="filho-d">
    <h3>FILHO D</h3>
    <Button onClick={() => alert(batata)}>BATATA EM ALERTA</Button>
  </div>;
}
