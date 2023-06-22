// Trazer de outro arquivo/biblioteca alguma função ou variável
import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Selecionando a div na página
const rootElement = document.getElementById("root");

// A div root será a base da aplicação
const root = ReactDOM.createRoot(rootElement);

// Inserimos o conteúdo da página
root.render(

        <App />

);
