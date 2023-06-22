import { Container } from "./Cards.js"
import "./Cards.css"

const alunos = [
    {
        nome: "Matheus",
        nascimento: "09/07/1998",
        nota: "9.0",
        telefone: "47 98888-4444"
    },
    {
        nome: "Lucas",
        nascimento: "09/07/1998",
        nota: "7.0",
        telefone: "47 95555-4444"
    },
    {
        nome: "Luiza",
        nascimento: "09/07/1998",
        nota: "5.0",
        telefone: "47 96666-4444"
    },
    {
        nome: "Rafael",
        nascimento: "09/07/1998",
        nota: "3.0",
        telefone: "47 97777-4444"
    }
]


export function Cards() {
    const alunosConjunto = alunos.map((aluno) => {
        
        
        const classStyle = (aluno.nota >= 7 ? "aprovado" : "reprovado")
        const showGrade = (aluno.nota >= 7 ? <p>Nota: {aluno.nota}</p> : <p> Precisa se esforçar.</p>)
        
        
        return (
            <div className={classStyle}>
                <h1>{aluno.nome}</h1>
                <p>{aluno.nascimento}</p>
                <p>{showGrade}</p>
                <p>Telefone: {aluno.telefone}</p>
            </div>
        )
    })

    return (
        <Container>
            {alunosConjunto}
        </Container>
    )
}