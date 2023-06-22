import "./CadastroPessoas.css"
import { useState } from "react"

export function CadastroPessoas() {

  let email, nome, cpf, salario = '';
  let dados = []
  let [tabela, setTabela] = useState([]);

  function adicionar() {
    if (tabela != null) {
      dados = tabela;
    }
    dados.push(
      {
        email: email,
        nome: nome,
        cpf: cpf,
        salario: salario,
      }
    )
    setTabela(dados);
    console.log(tabela);
  }

  function limpar() {
    document.getElementById('email').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('salario').value = '';
  }

  return (
    <>
      <div className="inputs">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" required onChange={(e) => email = e.target.value} />
        <label htmlFor="nome">Nome:</label>
        <input type="text" name="nome" id="nome" required onChange={(e) => nome = e.target.value} />
        <label htmlFor="cpf">Cpf:</label>
        <input type="text" name="cpf" id="cpf" required onChange={(e) => cpf = e.target.value} />
        <label htmlFor="salario">Salario:</label>
        <input type="number" name="salario" id="salario" required onChange={(e) => salario = e.target.value} />
        <div className="buttons">
          <button onClick={adicionar}>Adicionar</button>
          <button onClick={limpar}>Limpar</button>
        </div>
      </div>
      <div className="tabela">
        <table>
          {tabela.map((e) => {
            return (<tr key={e.email}>
              <td>{e.email}</td>
              <td>{e.name}</td>
              <td>{e.cpf}</td>
              <td>{e.salario}</td>
            </tr>)
          })}
        </table>
      </div>
    </>

  );

};