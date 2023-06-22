import "./Navbox.css"


// props = propredades de um componente 
// Renderização condicional = mudar o visual e estrutura do componente de acordo com algum valor

export function NavBar({ logado, nomeUsuario }) {

  //mensagem = (logado) ? mensagem = <p>Bem vindo(a) <b>{nomeUsuario}!</b></p> : mensagem = <p>Fazer login</p>;

  return (
    <div className="navBar">

      {logado && <img width="25" src="https://www.theventuretours.com/wp-content/uploads/2020/03/avatar-icon-png-1-1024x1024.png" />}
      {(logado) ? <p>Bem vindo(a) <b>{nomeUsuario}!</b></p> : <p>Você não está conectado</p>}
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Ajuda</a></li>
        {logado && <li><a href="#">Perfil</a></li>}
        {!logado && <li><a href="#">Cadastre-se</a></li>}
      </ul>

    </div>
  );
};