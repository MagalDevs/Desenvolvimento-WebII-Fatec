"use strict";
//npm init -y
//npm i -D typescript
//npx tsc --init
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, idade, hobbies) {
        this.nome = nome;
        this.idade = idade;
        this.hobbies = hobbies;
    }
}
exports.default = Pessoa;
const pessoa = new Pessoa('João', 30, ['Esportes', 'Cozinhar']);
console.log(pessoa);
