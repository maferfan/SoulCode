import "./ListaAlunos.css"

const alunos = [
  {
    nome: "Gabriel Diniz",
    dataNascimento: "11/12/2002",
    nota: 6,
    telefone: "21 98329-3293",
  },
  {
    nome: "Jose Almir",
    dataNascimento: "25/03/1996",
    nota: 7,
    telefone: "31 95464-6846",
  },
  {
    nome: "Gabriel Braga",
    dataNascimento: "25/12/2001",
    nota: 8,
    telefone: "38 94846-5656",
  },
  {
    nome: "Barbara Carolina",
    dataNascimento: "25/12/2004",
    nota: 10,
    telefone: "31 99946-5547",
  },
  {
    nome: "Victor Campos",
    dataNascimento: "03/03/2003",
    nota: 4,
    telefone: "22 96545-3694",
  },
]

export function ListaAlunos() {
  return (
    <div className="cards">
      {alunos.map((aluno) => {
        return (
          <div className="card" style={(aluno.nota < 7) ? { borderColor: "red" } : { borderColor: "green" }}>
            <h2>Nome: {aluno.nome}</h2>
            <h3>Data de nascimento: {aluno.dataNascimento}</h3>
            <h3>Contato: {aluno.telefone}</h3>
            {(aluno.nota >= 7) ? <h3>Nota: {aluno.nota}</h3> : <p><b>Quem sabe da próxima vez...</b></p>}
          </div>
        )
      })}
    </div>
  );
}