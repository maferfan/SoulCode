import { useState } from "react";
import "./Quiz.css"
export function Quiz() {

  const [statusQuiz, setStatusQuiz] = useState("pendente");
  const [tentativas, setTentativas] = useState(0);
  function checarResposta(alt) {
    if (alt === pergunta.alternativaCorreta) {
      setStatusQuiz("acertou")
    }
    else {
      setStatusQuiz("errou")
    }
  }

  const pergunta = {
    enunciado: "Que ano começou a primeira guerra mundial",
    alternativas: [
      "1914",
      "1915",
      "1913",
      "1918",
    ],
    alternativaCorreta: "1914"
  }

  //
  if (statusQuiz === "acertou") {
    return (
      <div>
        <h3>Parabéns, você acertou!</h3>
        <p>Mostrou que manja!</p>
      </div>
    );
  }
  else if (tentativas >= 2) {
    return (
      <h2>Você errou denovo! Tentativas esgotadas</h2>
    )
  }
  else if (statusQuiz === "pendente") {
    return (
      <div>
        <h3>{pergunta.enunciado}</h3>
        <ol type="A">
          {pergunta.alternativas.map((alt) => (
            <li className="alternativa" onClick={() => {
              checarResposta(alt)
              setTentativas(tentativas + 1)
            }}>
              {alt}
            </li>
          ))}
        </ol>
      </div>
    );
  }
  else if (statusQuiz === "errou") {
    return (
      <div>
        <h3>Você errou. Mas pode tentar novamente.</h3>
        <button onClick={() => {
          setStatusQuiz("pendente")

        }}>Tentar novamente</button>
      </div>
    );
  }

}