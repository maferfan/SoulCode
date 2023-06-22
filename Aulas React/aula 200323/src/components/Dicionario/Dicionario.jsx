import { useEffect, useState } from "react";
import "./Dicionario.css";

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

  const [palavra, setPalavra] = useState('');
  const [resultado, setResultado] = useState(palavras);

  useEffect(() => {
    const busca = palavras.filter((p) => p.palavra.toLowerCase().includes(palavra.toLowerCase()));
    setResultado(busca);
  }, [palavra])

  return (
    <div>
      <input type="text" placeholder="pesquiser uma palavra" onChange={(e) => setPalavra(e.target.value)} /> <br />

      <small>termo buscado: <strong>{palavra}</strong></small>
      <hr />
      {resultado.length === 0 && <h3>Sua busca não retornou resultados</h3>}
      {resultado.map((r, index) => {
        return (
          <div key={index}>
            <h2>{r.palavra}</h2>
            <blockquote>{r.significado}</blockquote>
          </div>
        )
      })}
    </div >
  )
}