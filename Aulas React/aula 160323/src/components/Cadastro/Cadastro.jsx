import { useState } from "react";
export function Cadastro() {

  let [nome, setNome] = useState("")
  let [email, setEmail] = useState("")
  let [cadastro, setCadastro] = useState("")

  return (
    <div>
      <strong>Formulario de cadastro</strong>
      <br />
      <input type="text" placeholder="Digite seu nome" onChange={(e) => {
        setNome(e.target.value);
        setCadastro(`O email do usuario ${e.target.value} é: ${email}`)
      }} />
      <br />
      <input type="text" placeholder="Digite seu e-mail" onChange={(e) => {
        setEmail(e.target.value);
        setCadastro(`O email do usuario ${nome} é: ${e.target.value}`)
      }} />
      <br />
      <textarea cols="30" rows="10" disabled value={cadastro}></textarea>
      <br />
      <strong>nome: {nome}</strong>
      <br />
      <strong>email: {email}</strong>
    </div>
  )
}