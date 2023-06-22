import "./Desafio3.css";
import { useState } from "react";

export function Desafio3() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [salario, setSalario] = useState('');
  const [listaPessoas, setListaPessoas] = useState([]);

  function adicionar() {

    const obj = {
      nome: nome,
      email: email,
      salario: salario,
      cpf: cpf,
    };

    const arr = [...listaPessoas, obj];
    setListaPessoas(arr);

    setNome('');
    setEmail('');
    setCpf('');
    setSalario('');
  }

  function remover(e) {
    const arr = listaPessoas.filter((element) => element != e);
    setListaPessoas(arr);
  }


  return (
    <div className="cadastro-pessoas">
      <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} value={nome} /><br />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} /><br />
      <input type="text" placeholder="CPF" onChange={(e) => setCpf(e.target.value)} /><br value={cpf} />
      <input type="number" placeholder="Salario" onChange={(e) => setSalario(e.target.value)} value={salario} /><br />
      <button onClick={adicionar}>Adicionar</button>
      <hr />
      <table className="tabela-pessoas">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>CPF</th>
            <th>Salario</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {listaPessoas.map((e, index) => {
            return (
              <tr key={index}>
                <td>{e.nome}</td>
                <td>{e.email}</td>
                <td>{e.cpf}</td>
                <td>{e.salario}</td>
                <td><button onClick={() => remover(e)}>Remover</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}