import { usuarios } from "../../data/usuarios"
import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"

export function Usuarios() {
    return (
        <div className="usuario">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Editar</th>
                        <th>Perfil</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, index) => {
                        return (
                            <tr key={index}>
                                <td>{usuario.id}</td>
                                <td>{usuario.nome}</td>
                                <td>{usuario.idade}</td>
                                <td>{usuario.email}</td>
                                <td>
                                    <Link to={`/usuario/edit/${usuario.id}`}>Editar</Link>
                                </td>
                                <td>
                                    <Link to={`/usuario/perfil/${usuario.id}`}>Perfil</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}