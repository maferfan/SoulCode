import { Button } from "react-bootstrap";
import { usuarios } from "../../data/usuarios";
import { Link, useParams } from "react-router-dom";

export function Perfil() {

    let id = useParams().id

    const user = usuarios.filter(usuario => (usuario.id === Number(id)))


    return (
        <div className="edita-usuario">
            {user.map((u) => (
                <div key={u.id}>
                    <h2>{u.nome}</h2>
                    <span>{u.email}</span>
                    <br />
                    <span>{u.idade}</span>
                    <br />
                    <Button variant="dark">Alterar</Button>
                    <Button variant="dark">
                        <Link to="/usuarios">Voltar</Link>
                    </Button>
                </div>
            ))}
        </div>
    )
}

