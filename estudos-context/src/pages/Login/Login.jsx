import "./Login.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Login() {
  const {temaEscuro} = useContext(ThemeContext)

  return (
    <div className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}>
      <div className="login" >
        <form>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example1" >Endereço de e-mail</label>
            <input type="email" id="form2Example1" class="formControl" />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example2" >Senha</label>
            <input type="password" id="form2Example2" class="formControl" />
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
    </div>
  )
}
