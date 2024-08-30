"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// npm i express
// npm i -D @types/node @types/express
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Olá!');
});
app.get('/tabuada/:numero', (req, res) => {
    const numero = Number(req.params.numero);
    res.send(numero);
});
app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`);
});
// npx tsc
// node server.js
// npm i -D nodemon ts-node
// Para remover - npm uninstall ts-node-dev
// npx nodemon --exec ts-node server.ts
