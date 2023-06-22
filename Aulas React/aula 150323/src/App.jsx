// import { ListaCompras } from "./components/ListaCompras/ListaCompras";
// import { ListaFuncionarios } from "./components/ListaFuncionarios/ListaFuncionarios";
// import { NavBar } from "./components/NavBar/NavBar";

import { Impar } from "./components/Impar/Impar";
import { ListaAlunos } from "./components/ListaAlunos/ListaAlunos";

export function App() {
  return (
    <>
      {/* <ListaCompras />
      <ListaFuncionarios />
      <NavBar logado={true} nomeUsuario="Jóse" />
      <NavBar logado={false} /> */}
      <ListaAlunos />
      <Impar numero={178} />
    </>
  )
}