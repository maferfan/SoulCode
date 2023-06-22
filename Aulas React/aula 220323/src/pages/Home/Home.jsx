import { Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css"


export function Home() {
    return (

        <div className="home">
            <div className="aside">
                <h1>Início</h1>
                <ul>
                    <li>Secções</li>
                </ul>
            </div>
            <div className="main">
                <div className="header"><h1>Secções</h1></div>
                <div>
                    <Nav variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <LinkContainer to="/">
                                <Nav.Link>Secção 1</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="s2">
                                <Nav.Link>Secção 2</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                        <Nav.Item>
                            <LinkContainer to="s3">
                                <Nav.Link>Secção 3</Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                    </Nav>

                    <Outlet />
                </div>
            </div>
        </div>
    )
}