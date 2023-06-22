import { useState } from "react";
import "./CadastroPessoas.css"

export function CadastroPessoas() {
    const [pessoas, setPessoas] = useState([]);
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [salario, setSalario] = useState("");

    const EmailChange = (event) => setEmail(event.target.value);
    const NomeChange = (event) => setNome(event.target.value);
    const CpfChange = (event) => setCpf(event.target.value);
    const SalarioChange = (event) => setSalario(event.target.value);

    const AddPessoa = () => {
        const novaPessoa = {
            email: email,
            nome: nome,
            cpf: cpf,
            salario: salario,
        };
        setPessoas([...pessoas, novaPessoa]);
        setEmail("");
        setNome("");
        setCpf("");
        setSalario("");
    };

    const RemovePessoa = (index) => {
        const novasPessoas = [...pessoas];
        novasPessoas.splice(index, 1);
        setPessoas(novasPessoas);
    };

    return (
        <div className="container">
            <h2>Cadastro de Pessoas</h2>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" value={email} onChange={EmailChange} />
            </div>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input type="email" id="nome" value={nome} onChange={NomeChange} />
            </div>
            <div>
                <label htmlFor="cpf">CPF:</label>
                <input type="text" id="cpf" value={cpf} onChange={CpfChange} />
            </div>
            <div>
                <label htmlFor="salario">Salário R$:</label>
                <input type="number" id="salario" value={salario} onChange={SalarioChange} />
            </div>
            <button onClick={AddPessoa}>Adicionar</button>
            <h3>Pessoas cadastradas:</h3>
            <table>
                <tbody>
                    {pessoas.map((pessoa, index) => (
                        <div key={index} className="container-table">
                            <tr><td>Email: {pessoa.email}</td></tr>
                            <tr><td>Nome: {pessoa.nome}</td></tr>
                            <tr><td>Cpf: {pessoa.cpf}</td></tr>
                            <tr><td>Salário R$: {pessoa.salario}</td></tr>
                            <tr><td><button onClick={() => RemovePessoa(index)}>Remover</button></td></tr>
                        </div>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
