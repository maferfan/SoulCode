import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Menu } from "./components/Menu/Menu";
import { Home } from './pages/Home/Home';
import { Blog } from './pages/Blog/Blog';
import { Contato } from './pages/Contato/Contato';
import { Login } from './pages/Login/Login';
import { Usuarios } from './pages/Usuarios/Usuarios';
import { NotFound } from './pages/NotFound/NotFound';
import { Root } from './pages/Root/Root';
import { Seccao } from './components/Seccao/Seccao';
import { Perfil } from './pages/Perfil/Perfil';
import { EditaUsuario } from './pages/EditaUsuario/EditaUsuario';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Root />}>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<Seccao titulo="Secção 1" subtitulo="Texto 1" paragrafo={<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, atque!</p>} />} />
              <Route path="s2" element={<Seccao titulo="Secção 2" subtitulo="Texto 2" paragrafo={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, rem a!</p>} />} />
              <Route path="s3" element={<Seccao titulo="Secção 3" subtitulo="Texto 3" paragrafo={<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed laudantium illo natus architecto.</p>} />} />
            </Route>
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/usuario/edit/:id" element={<EditaUsuario />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil/:id/" element={<Perfil />} />
            <Route path="*" element={<NotFound />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
