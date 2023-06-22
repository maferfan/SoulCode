import { useEffect, useState } from "react";
import "./Dicionario.css"

const palavras = [
    {
        palavra: 'Alvíssaras',
        significado: 'Expressão de alegria por notícia recebida.',
    },
    {
        palavra: 'Balaústre',
        significado: 'Pequena coluna ornamentada utilizada em cercas.',
    },
    {
        palavra: 'Beneplácito',
        significado: 'Consentimento ou aprovação.',
    },
    {
        palavra: 'Cuntatório',
        significado: 'Em que há demora.',
    },
    {
        palavra: 'Deletério',
        significado: 'Degradante, insalubre, prejudicial.',
    },
    {
        palavra: 'Filantropo',
        significado: 'Presunçoso',
    },
    {
        palavra: 'Hebdomadário',
        significado: 'Semanal.',
    },
    {
        palavra: 'Inócuo',
        significado: 'Inofensivo.',
    },
    {
        palavra: 'Ósculo',
        significado: 'Beijo, com o sentido de cumprimento ou conciliação.',
    },
    {
        palavra: 'Quintessência',
        significado: 'Auge, máximo, primor.',
    },
    {
        palavra: 'Recôndito',
        significado: 'Oculto.',
    },
    {
        palavra: 'Taciturno',
        significado: 'Sombrio, obscuro.',
    },
    {
        palavra: 'Ufanismo',
        significado: 'Aquele que se orgulha de algo de forma exagerada.',
    },
    {
        palavra: 'Verossimilhança',
        significado: 'Discurso que parece ser verdadeiro, coerente, plausível.',
    },
    {
        palavra: 'Zeugma',
        significado:
            'Figura de linguagem que consiste na omissão de um termo dito anteriormente.',
    },
];

export function Dicionario() {
    const [busca, setBusca] = useState("")
    const [resultados, setResultados] = useState(palavras)

    useEffect(() => {
        setResultados(palavras.filter((i) => i.palavra.toLowerCase().includes(busca.toLowerCase())))
    }, [busca])

    return (
        <div>
            <input
                type="text"
                placeholder="Pesquise uma palavra"
                onChange={(e) => setBusca(e.target.value)}
            />
            {resultados.map((i, index) =>
                <div key={index}>
                    <li><b>{i.palavra}</b></li>
                    <blockquote>{i.significado}</blockquote>
                </div>
            )}

        </div>)
}
