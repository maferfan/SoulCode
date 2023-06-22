import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./NavBar.css"

export function NavBar() {
  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;
  const alternar = resultado.alternar;

  let iconeBtn = "https://cdn-icons-png.flaticon.com/512/3073/3073665.png";
  if (temaEscuro) {
    iconeBtn = "https://cdn-icons-png.flaticon.com/512/581/581601.png";
  }

  return (
    <Navbar
      bg={temaEscuro ? "dark" : "light"}
      variant={temaEscuro ? "dark" : "light"}
      className="navbar"
    >
      <div className="box">
        <Navbar.Brand className="title">App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="nav">
            <div className="nav-link">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/perfil">
                Perfil
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </div>
            <Button variant={temaEscuro ? "dark" : "light"} onClick={alternar} className="imag">
              <div>Alternar</div>
              <div><img src={iconeBtn} width="10" /></div>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
