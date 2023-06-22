import { useEffect, useState } from "react";
import { Button, FormCheck } from "react-bootstrap";
import "./Login.css"
import img from "./Login-rafiki.png"

export function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [validacao, setValidacao] = useState();
  const [submit, setSubmit] = useState();

  useEffect(() => setValidacao(''), [email, senha]);
  useEffect(() => limpar(), [submit]);
  function limpar() {
    setEmail('');
    setSenha('');
  }



  return (
    <div className="paginaLogin">
      <div className="login">
        <img src={img} alt="" />
        <form action="">
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} required size={25} />

          <label htmlFor="senha">Senha:</label>
          <input type="number" name="senha" id="senha" onChange={(e) => setSenha(e.target.value)} value={senha} required />

          <FormCheck type="checkbox" label="Li e concordo o os termos de serviços" onClick={() => setValidacao(true)} checked={validacao}></FormCheck>
          <div className="buttons">
            < Button>Cadastrar</Button>
            < Button type="submit" onClick={() => setSubmit(true)} disabled={!validacao}> Entrar</Button>
          </div>
        </form >
      </div >
    </div>
  )
}