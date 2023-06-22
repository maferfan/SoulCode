
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Menu } from './components/Menu/Menu';
import { Home } from './components/Pages/Home/Home';
import { Blog } from './components/Pages/Blog/Blog';
import { Contato } from './components/Pages/Contato/Contato';
import { Usuarios } from './components/Pages/Usuarios/Usuarios;';
import { Login } from './components/Pages/Login/Login';
import { Container } from 'react-bootstrap';



function App() {
  return (
    <>

      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contato' element={<Contato />} />
            <Route path='/usuarios' element={<Usuarios />} />
            <Route path='/Login' element={<Login />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
