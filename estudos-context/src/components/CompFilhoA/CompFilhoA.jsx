import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { CompFilhoC } from "../CompFilhoC/CompFilhoC";
import "./CompFilhoA.css";

export function CompFilhoA() {
  
  const {temaEscuro} = useContext(ThemeContext)
  
  return (
    <div className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}>
      <h3>FILHO A</h3>
      <CompFilhoC />
    </div>
  );
}
