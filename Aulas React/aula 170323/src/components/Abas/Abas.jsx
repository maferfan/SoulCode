import "./Abas.css";
import { useState } from "react";

export function Abas() {
  let [conteudo, setConteudo] = useState("home");

  // function goHome() {
  //   setConteudo("home");
  // }
  // function goPerfil() {
  //   setConteudo("perfil");
  // }
  // function goAjuda() {
  //   setConteudo("ajuda");
  // }

  let conteudoAba;

  if (conteudo === "home") {
    conteudoAba = <div><h1>HOME</h1></div>
  }
  else if (conteudo === "perfil") {
    conteudoAba = <div><h1>PERFIL</h1></div>
  }
  else if (conteudo === "ajuda") {
    conteudoAba = <div><h1>AJUDA</h1></div>
  }


  return (
    <div>
      <button className="navButton" onClick={() => setConteudo("home")}>Home</button>
      <button className="navButton" onClick={() => setConteudo("perfil")}>Perfil</button>
      <button className="navButton" onClick={() => setConteudo("ajuda")}>Ajuda</button>
      <hr />
      <div> {conteudoAba} </div>
    </div>
  )
};

/*
  let aba = "home"
  if (aba === "home") {
    return (
      <div>
        <button className="navButton">Home</button>
        <button className="navButton">Perfil</button>
        <button className="navButton">Ajuda</button>
        <hr />
        <div className="conteudo">
          HOME
        </div>
      </div>
    );
  }
  else if (aba === "perfil") {
    return (
      <div>
        <button className="navButton">Home</button>
        <button className="navButton">Perfil</button>
        <button className="navButton">Ajuda</button>
        <hr />
        <div className="conteudo">
          PERFIL
        </div>
      </div>
    );
  }
  else if (aba === "ajuda") {
    return (
      <div>
        <button className="navButton">Home</button>
        <button className="navButton">Perfil</button>
        <button className="navButton">Ajuda</button>
        <hr />
        <div className="conteudo">
          AJUDA
        </div>
      </div>
    );
  }
*/