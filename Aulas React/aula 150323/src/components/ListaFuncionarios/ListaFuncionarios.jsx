import "./ListaFuncionarios.css";

const funcionarios = [
  {
    cod: 1,
    nome: "Gabriel Braga",
    email: "gabriel.braga@email.com",
    endereco: { cidade: "Ubajara", estado: "CE" },
  },
  {
    cod: 2,
    nome: "José Almir",
    email: "jose.almir@email.com",
    endereco: { cidade: "Tianguá", estado: "CE" },
  },
  {
    cod: 3,
    nome: "Carlos Antônio",
    email: "carlos.antonio@email.com",
    endereco: { cidade: "São Paulo", estado: "SP" },
  },
  {
    cod: 4,
    nome: "Maria de Souza",
    email: "maria.souza@email.com",
    endereco: { cidade: "São Paulo", estado: "SP" },
  },
];

export function ListaFuncionarios() {

  const conteudoTabela = funcionarios.map((element) => {
    return (
      <tr key={element.cod
      }>
        <td>{element.cod}</td>
        <td>{element.nome}</td>
        <td>{element.email}</td>
        <td>{element.endereco.cidade}, {element.endereco.estado}</td>
      </tr>
    )
  })

  return (
    <table className="tabela-func">
      <thead>
        <tr>
          <th>Cód.</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Endereço</th>
        </tr>
      </thead>
      <tbody>
        {conteudoTabela}

      </tbody>
    </table>
  );
}
