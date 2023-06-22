
import { useState } from "react";
import "./Login.css"
import "react-toastify/dist/ReactToastify.css";
import { usuarios } from "../../data/usuarios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");;
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const user = usuarios.find((user) => user.email === email && user.senha === password);
        if (user) {
            navigate("/");
        } else {
            toast.error('Login ou senha inválidos')
        }
    };

    return (
        <div className="login" >
            <ToastContainer/>
            <form onSubmit={handleLogin}>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example1" >E-mail</label>
                    <input type="email" id="form2Example1" class="formControl" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example2" >Senha</label>
                    <input type="password" id="form2Example2" class="formControl" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div class="m-4 checkbox">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="form2Example34" />
                        <label class="form-check-label" for="form2Example34"> Lembrar-me </label>
                    </div>
                    <div class="row">
                        <a href="#" className="link">Esqueceu a senha?</a>
                    </div>
                </div>
                <div class="text-center ">
                    <button type="submit" class="btn btn-dark btn-block mb-4 submit">Entrar</button>
                    <p>Não é um membro? <a href="#" className="link">Registrar-se</a></p>
                    <div className="botoes">
                        <button type="button" class="btn btn-dark btn-floating mx-1 but">
                            <i class="fab fa-facebook-f"></i>
                        </button>
                        <button type="button" class="btn btn-dark btn-floating mx-1 but">
                            <i class="fab fa-google"></i>
                        </button>
                        <button type="button" class="btn btn-dark btn-floating mx-1 but">
                            <i class="fab fa-twitter"></i>
                        </button>
                        <button type="button" class="btn btn-dark btn-floating mx-1 but">
                            <i class="fab fa-github"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )


}
