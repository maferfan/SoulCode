import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { usuarios } from "../../data/usuarios";

export function EditaUsuario() {

  const { id } = useParams();
  const [disabled, setDisabled] = useState(true);
  const usuario = usuarios.find((e) => id === e.id.toString());
  const navigate = useNavigate();
  const [email, setEmail] = useState(usuario.nome);
  const [nome, setNome] = useState(usuario.email);
  const [idade, setIdade] = useState(usuario.idade);
  const [senha, setSenha] = useState(usuario.senha);
  const [modalShow, setModalShow] = useState(false);
  let senhaConfirmada = '';

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label className="mt-3" htmlFor="senhaConfirmada" >Confirme sua senha: </Form.Label>
          <Form.Control type="password" id="senhaConfirmada" placeholder="Digite a senha" onChange={(e) => senhaConfirmada = e.target.value} disabled={disabled} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={editar}>Confirmar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function editar() {
    if (senhaConfirmada === usuario.senha) {
      console.log(email, nome, idade, senha)
      if (nome === '' || email === '' || idade === '' || senha === '') {
        return alert('Preencha todos os campos')
      }
      navigate("/usuarios");
    }
    else {
      alert("Senha incorreta");
      document.getElementById('senhaConfirmada').value = '';
    }
  }

  return (
    <div className="edita-usuario">
      <Form.Label className="mt-3" htmlFor="email"  >Nome</Form.Label>
      <Form.Control type="email" id="email" placeholder="Entre com e-mail" value={nome} onChange={(e) => setNome(e.target.value)} disabled={disabled} />
      <Form.Label className="mt-3" htmlFor="email"  >E-mail</Form.Label>
      <Form.Control type="email" id="email" placeholder="Entre com e-mail" value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled} />
      <Form.Label className="mt-3" htmlFor="email"  >Idade</Form.Label>
      <Form.Control type="email" id="email" placeholder="Entre com e-mail" value={idade} onChange={(e) => setIdade(e.target.value)} disabled={disabled} />
      <Form.Label className="mt-3" htmlFor="email"  >Senha</Form.Label>
      <Form.Control type="password" id="email" placeholder="Entre com e-mail" value={senha} onChange={(e) => setSenha(e.target.value)} disabled={disabled} />
      <Button onClick={() => setDisabled(false)} className="me-3">Editar</Button>
      <Button variant="primary" onClick={() => setModalShow(true)} disabled={disabled} className="me-3">Confirmar</Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <LinkContainer to="/usuarios">
        <Button>Cancelar</Button>
      </LinkContainer>
    </div >
  )
}