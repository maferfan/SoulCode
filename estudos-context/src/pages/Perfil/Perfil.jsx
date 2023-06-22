import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Perfil.css";
import { CompFilhoA } from "../../components/CompFilhoA/CompFilhoA";

export function Perfil() {
  const a = useContext(ThemeContext)
  const temaEscuro = a.temaEscuro

  return (
    <div className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}>
      <div className="box-perfil">
      <h1 className="title-perfil"><CompFilhoA/></h1>
      </div>
    </div>
  );
}
