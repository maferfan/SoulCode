import { usuarios } from "../../data/usuarios"
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";


export function Usuarios() {
    return (
        <div className="usuarios">
            <h1>Usuarios</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>E-mail</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((e) => {
                        return (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.nome}</td>
                                <td>{e.idade}</td>
                                <td>{e.email}</td>
                                <td><Link to={`/usuario/edit/${e.id}`}> Editar</Link></td>
                                <td><Link to={`/perfil/${e.id}`}> Perfil</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div >
    )
}