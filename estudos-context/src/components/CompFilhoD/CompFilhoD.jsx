import { useContext } from "react";
import { BatataContext } from "../../contexts/BatataContext";
import "./CompFilhoD.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function CompFilhoD() {
  const resultado = useContext(BatataContext);

  return (
    <div className="filho-d">
      <h3>FILHO D</h3>
      <i className="text-danger">{resultado}</i>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://picsum.photos/200" />
        <Card.Body>
          <Card.Title>{resultado}</Card.Title>
          <Card.Text>{resultado}</Card.Text>
          <Button variant="primary">Ir para</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
