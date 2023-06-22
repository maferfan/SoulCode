import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useParams } from "react-router-dom";
import { usuarios } from "../../data/usuarios";
import "./Perfil.css"

export function Perfil() {
  const { id } = useParams();
  console.log(id);
  const pessoa = usuarios.filter((e) => id === e.id.toString());
  console.log(pessoa)
  return (
    <div className="perfil-container">
      <div className="aside">
        <LinkContainer to="/usuarios">
          <Button>Voltar</Button>
        </LinkContainer>
      </div>
      <div className="main">
        <div className="header">
          <h1>{pessoa[0].nome}</h1>
        </div>
        <div>
          <p>Id: {pessoa[0].id}</p>
          <hr />
          <p>Nome: {pessoa[0].nome}</p>
          <hr />
          <p>Email: {pessoa[0].email}</p>
          <hr />
          <p>Idade: {pessoa[0].idade}</p>
          <hr />
        </div>
      </div>

    </div>
  )
}