//npm init -y
//npm i -D typescript
//npx tsc --init

export default class Pessoa{
    nome: string
    idade: number
    hobbies: string[]

    constructor(nome: string, idade: number, hobbies: string[]){
        this.nome = nome
        this.idade = idade
        this.hobbies = hobbies
    }
}

const pessoa = new Pessoa('João', 30, ['Esportes', 'Cozinhar'])
console.log(pessoa)