import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export function Menu() {
    return (
        <div className="menu">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Menu</Navbar.Brand>
                    <Nav className="me-auto">
                        <Button variant="link">
                            <Link to="/">Home</Link>
                        </Button>
                        <Button variant="link">
                            <Link to="/blog">Blog</Link>
                        </Button>
                        <Button variant="link">
                            <Link to="/contato">Contato</Link>
                        </Button>
                        <Button variant="link">
                            <Link to="/usuarios">Usuários</Link>
                        </Button>
                        <Button variant="link">
                            <Link to="/login">Login</Link>
                        </Button>
                        <Button variant="link">
                            <Link to="/produtos">Produtos</Link>
                        </Button>
                        <Button variant="link">
                            <Link to="/cadastro/pokemon">Pokemon</Link>
                        </Button>
                        <Button variant="link">
                            <Link to="/cadastro/herois">Super Heróis</Link>
                        </Button>
                        <Button variant="link">
                            <Link to="/cadastro/equipamento">Equipamento</Link>
                        </Button>
                        <Button variant="link">
                            <Link to="/cadastro/programador">Programadores</Link>
                        </Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}