import { Card, Button, Form, Toast, ToastContainer } from "react-bootstrap";
import "./Login.css";
import { usuarios } from "../../data/usuarios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function Login() {

    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    function signin() {
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const usuario = usuarios.find(u => (u.email === email && u.senha === senha));
        if (usuario) {
            navigate("/");
        }
        else {
            setShow(true);
        }
    }


    return (
        <div className="login">
            <Card style={{ width: "25rem" }}>
                <Card.Header>
                    <h2 className="text-center">Login</h2>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Button className="w-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                            </svg>
                        </Button>
                        <Form.Label className="mt-3" htmlFor="email">E-mail</Form.Label>
                        <Form.Control type="email" id="email" placeholder="Entre com e-mail" />
                        <Form.Label className="mt-3" htmlFor="senha">Senha</Form.Label>
                        <Form.Control type="password" id="senha" placeholder="Entre com senha" />
                        <Button className="w-100 mt-3" onClick={signin}>Enviar</Button>
                    </Form>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <a href="#a">Cadastre-se</a>
                </Card.Footer>
            </Card>

            <ToastContainer position="bottom-end" className="pb-3">
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        <strong>E-mail ou senha inválido!</strong>
                    </Toast.Header>
                    <Toast.Body>Verique o e-mail e senha digitado.</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    )
}