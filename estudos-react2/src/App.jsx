
import { Home } from "./pages/Home/Home"
import { Contato } from "./pages/Contato/Contato"
import { Blog } from "./pages/Blog/Blog"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Usuarios } from "./pages/Usuarios/Usuarios"
import { Login } from "./pages/Login/Login"
import { NotFound } from "./pages/NotFound/NotFound"
import { Root } from "./pages/Root/Root"
import { Section } from "./pages/Home/Section"
import { EditUser } from "./pages/EditUser/EditUser"
import { Perfil } from "./pages/Perfil/Perfil"
import { Pokemon } from "./pages/Pokemon/Pokemon"
import { Validation } from "./pages/ValidationModel/ValidationModel"
import { Cadastro } from "./pages/Cadastro/Cadastro"
import "./App.css";
import { Context } from "./data/Context"
import { useState } from "react"

const text = [
    { title: "Section 1", descricao: "Lorem1" },
    { title: "Section 2", descricao: "Lorem2" },
    { title: "Section 3", descricao: "Lorem3" },
]



function App() {
    const [temaEscuro, setTemaEscuro] = useState(false)

    function tema(){
        if (temaEscuro){
            setTemaEscuro(false)
        }else
            setTemaEscuro(true)
    }

    return (
        <div className="App">
            <Context.Provider value={{temaEscuro, tema}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Root />}>
                            <Route path="/" element={<Home />}>
                                <Route path="1" element={<Section title={text[0].title} descricao={text[0].descricao} />} />
                                <Route path="2" element={<Section title={text[1].title} descricao={text[1].descricao} />} />
                                <Route path="3" element={<Section title={text[2].title} descricao={text[2].descricao} />} />
                            </Route>
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/usuario/edit/:id" element={<EditUser />} />
                            <Route path="/usuario/perfil/:id" element={<Perfil />} />
                            <Route path="/contato" element={<Contato />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/usuarios/" element={<Usuarios />} />
                            <Route path="/pokemon" element={<Pokemon />} />
                            <Route path="/validation" element={<Validation />} />
                            <Route path="/cadastro" element={<Cadastro />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Context.Provider>
        </div>
    )
}

export default App



