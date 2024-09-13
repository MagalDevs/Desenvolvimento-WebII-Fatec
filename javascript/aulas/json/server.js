"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//npm i express
//npm i -D @types/express @types/node
const express_1 = __importDefault(require("express"));
const cadastro_1 = __importDefault(require("./cadastro"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/pessoas', (req, res) => {
    const pessoa1 = new cadastro_1.default('João', 30, ['Esportes', 'Cozinhar']);
    const pessoa2 = new cadastro_1.default('Maria', 25, ['Ler', 'Cinema']);
    const listaPessoas = [pessoa1, pessoa2];
    res.json(listaPessoas);
});
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
