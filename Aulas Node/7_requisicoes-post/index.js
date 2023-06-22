// requires
const express = require("express");

// Configuração do app
const app = express();
app.use(express.json()); // lê o body no formato JSON

// Rotas
app.post("/enviar", (req, res) => {
  // req.body representa os dados enviados do corpo da requisição POST
  const { nome, email, senha } = req.body;
  res.json(`Recebido: ${nome}, ${email}, ${senha}`)
})

app.post("/imc", (req, res) => {
  const { peso, altura } = req.body;
  if (peso && altura) {
    const imc = peso / altura ** 2;
    res.json({ resultado: imc })
  }
  else {
    res.status(400).json("Error")
  }
})


// Escuta das requisições
app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000/"));
