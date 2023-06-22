import { Button } from "react-bootstrap";
import { usuarios } from "../../data/usuarios";
import { Link, useParams, useNavigate } from "react-router-dom";

export function EditUser() {

    let navigate = useNavigate()
    let {id} = useParams()

    const user = usuarios.filter(usuario => ( usuario.id === Number(id)))



    return (
        <div className="edita-usuario">
            {user.map((u) => (
                <div key={u.id}>
                    <h2>{u.nome}</h2>
                    <span>{u.email}</span>
                    <br />
                    <span>{u.idade}</span>
                    <br />
                    <Button variant="dark">Editar</Button>
                    <Button onClick={()=> navigate("/usuarios")} variant="dark">
                        Voltar
                    </Button>
                </div>
            ))}
        </div>
    )
}
