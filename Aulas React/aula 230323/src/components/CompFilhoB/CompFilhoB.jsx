import { useContext, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { BatataContext } from "../../context/BatataContext";
import "./CompFilhoB.css";

export function CompFilhoB() {

  const batata = useContext(BatataContext);
  const [show, setShow] = useState(false);


  return <div className="filho-b">

    <Alert show={show} variant={'primary'}>
      {batata}
      <Button onClick={() => setShow(false)}>Fechar</Button>
    </Alert>
    <h3>FILHO B</h3>
    <Button onClick={() => setShow(true)}>BATATA</Button>
  </div>;
}
