const usuarios = require("./moduloUsuarios");

function autenticar(email, senha) {
  const user = usuarios.find((user) => user.email === email);
  if (!user) return "usuario não existe";
  return (user.senha === senha) ? "usuario logado com sucesso" : "senha incorreta";
}

module.exports = autenticar;