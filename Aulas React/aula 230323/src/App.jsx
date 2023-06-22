import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Perfil } from "./pages/Perfil/Perfil";
import { ThemeContext } from "./context/ThemeContext";
import { useState } from "react";

export function App() {
  // true = escuro
  // false = tema claro
  const [temaEscuro, setTemaEscuro] = useState(false);

  function alternar() {
    if (temaEscuro == true) {
      setTemaEscuro(false)
    }
    else {
      setTemaEscuro(true);
    }
  }

  return (
    <ThemeContext.Provider value={{ temaEscuro: temaEscuro, alternar: alternar }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}