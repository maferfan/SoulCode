import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap"
import "./MenuAll.css"
import { useContext } from "react";
import { Context } from "../../../data/Context";

export function MenuAll() {
    
    
    const {temaEscuro} = useContext(Context)
    const {tema} = useContext(Context)

    return (
        <div className="menu">
            <Navbar  className={temaEscuro? "bg-dark text-light": "bg-light text-dark"}>
                <Nav className="me-auto box" >
                    <Button onClick={tema}>
                        <h1>Tema</h1>
                    </Button>
                    <div>
                        <Button variant="">
                            <Link to="/" className="a">Home</Link>
                        </Button>
                        <Button variant="">
                            <Link to="/blog" className="a">Blog</Link>
                        </Button>
                        <Button variant="">
                            <Link to="/usuarios" className="a">Usuários</Link>
                        </Button>
                        <Button variant="">
                            <Link to="/Contato" className="a">Contato</Link>
                        </Button>
                        <Button variant="">
                            <Link to="/Login" className="a">Login</Link>
                        </Button>
                        <Button variant="">
                            <Link to="/pokemon" className="a">Pokemon</Link>
                        </Button>
                        <Button variant="">
                            <Link to="/validation" className="a">Validation</Link>
                        </Button>
                        <Button variant="">
                            <Link to="/cadastro" className="a">Cadastro</Link>
                        </Button>
                    </div>
                </Nav>
            </Navbar>
        </div>
    )
}