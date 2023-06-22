
// Saber quando o botão foi clicado
const addBtn = document.getElementById("btn-add");

// Montar o corpo de linhas da tabela
const tBody = document.getElementById("conteudo-tabela");

// Event Listener = fofoqueiro = ouvinte
addBtn.addEventListener("click", () => {

  // Elementos de dados digitados pelo usuário
  let dados = {
    email: document.getElementById("email").value,
    cep: document.getElementById("cep").value,
    uf: document.getElementById("uf").value,
    localidade: document.getElementById("localidade").value,
    telefone: document.getElementById("telefone").value,
  }
  tBody.innerHTML += `
    <tr>
      <td>${dados.email}</td>
      <td>${dados.cep}</td>
      <td>${dados.uf}</td>
      <td>${dados.localidade}</td>
      <td>${dados.telefone}</td>
    </tr>
  `
  limpar();
});

function limpar() {
  document.getElementById("email").value = "";
  document.getElementById("cep").value = "";
  document.getElementById("uf").value = "";
  document.getElementById("localidade").value = "";
  document.getElementById("telefone").value = "";
}