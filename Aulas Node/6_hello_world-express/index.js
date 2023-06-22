const express = require("express");
const cpf = require("cpf");
const usuarios = require("./usuarios")


// Define uma aplicação backend em Express
// Recursos pré-configurados
const app = express();

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

// Define um roteamento
app.get("/", (requisicaom, resposta) => {
  resposta.send("Hello, World!")
})

// req = requisção do cliente
// res = resposta do cliente
app.get("/inicio", (req, res) => { // Manipulador de rota
  res.sendFile(__dirname + "/inicio.html");
})

app.get("/ajuda", (req, res) => {
  res.sendFile(__dirname + "/ajuda.html");
})

// Exercício II: Na rota /funcionarios/:cpf, valide o cpf passado
// pelo cliente. Se for válido responda positivamente (200), caso contrário
// responda negativamente (400).
// Parâmetro de caminho/rota
app.get("/funcionarios/:cpf", (req, res) => {
  (cpf.isValid(req.params.cpf)) ? res.sendStatus("200") : res.sendStatus("400")
})

app.get("/pessoa/:nome/:empresa", (req, res) => {
  const { nome, empresa } = req.params;
  res.send(`${nome} da ${empresa}`)
})

// Exercício I: Crie uma calculadora IMC (/imc), receba via parâmetros
// fixos, um peso e uma altura (converter p/ number). E responde
// com o resultado do cálculo.
app.get("/imc/:peso/:altura", (req, res) => {
  const { peso, altura } = req.params;
  const imc = Number(peso) / (Number(altura) * Number(altura));
  res.send(imc.toFixed(2).toString());
})

app.get("/youtube", (req, res) => {
  console.log(req.query)
  res.send("Youtube")
})

// Exercício III: Crie uma rota /cpfs/:numero. E responde com a quantidade de
// cpfs aleatórios solicitada.
app.get("/cpfs/:numeros", (req, res) => {
  const n = req.params.numeros;
  let str = '';
  for (i = 0; i < n; i++) {
    str += `${cpf.generate()}<br/>`
  }
  console.log(str)
  res.send(str);
})

// Exercício I: Crie uma rota que receba um parâmetro query `nome` e retorne uma mensagem de boas-vindas personalizada. Se `nome` não for fornecido, exiba uma mensagem de erro.
app.get("/e1", (req, res) => {
  const { nome } = req.query;
  (!nome) ? res.send("Error") : res.send(`Bem vindo(a), ${nome}`);
})

// Exercício II: Crie uma rota que receba dois parâmetros query, `num1` e `num2`. Retorne como resposta a soma dos números (se os dois numeros não forem fornecidos mostrar uma mensagem de erro).
app.get("/e2", (req, res) => {
  const { num1, num2 } = req.query;
  (!num1 || !num2) ? res.send("Error") : res.send(`${Number(num1) + Number(num2)}`);
})

// Exercício III: Crie uma rota que receba um parâmetro query, `lang` e exiba uma mensagem de boas vindas no idioma (português ou inglês). Caso a linguagem não seja fornecida ou suportada exiba uma mensagem de erro.
app.get("/e3", (req, res) => {
  const { lang } = req.query;
  if (!lang) res.send("Error");
  (lang === "pt-br") ? res.send("Bem vindo(a)!") : res.send("Welcome!")
})

app.get("/usuarios/:index", (req, res) => {
  res.json(usuarios[Number(req.params.index)]);
})

// Exercício I: Crie uma rota "/usuarios/email", e filtre o usuário com o email fornecido via parâmetros de rota. Caso não encontre, responda com 404.
// => /usuarios/email/gabriel.braga@soulcode.com
app.get("/usuarios/email/:email", (req, res) => {
  const { email } = req.params;
  const user = usuarios.find((user) => {
    return user.email === email;
  })
  if (user) {
    res.json(user)
  }
  else {
    res.status("404").json({ message: "usuario não encontrado" })
  }
})



app.get("/usuario/novo", (req, res) => {
  const { email, nome } = req.query;
  if (!email || !nome) res.send("Error");
  usuarios.push({ nome: nome, email: email });
  res.status("201").json({ message: "Usuario adicionado" })
})

console.log(usuarios)


// Inicializa a escuta de requisições do servidor
app.listen(3000)