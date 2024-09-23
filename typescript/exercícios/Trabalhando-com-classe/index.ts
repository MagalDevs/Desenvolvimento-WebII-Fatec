class Pessoa{
    nome: String;
    idade: Number;
    email: String;

    constructor(nome: String, idade: number, email: String) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    apresentar(){
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu email é ${this.email}`
    }
}

const pessoa = new Pessoa("Daniel", 18, "danielgalfla12@gmail.com");
console.log(pessoa.apresentar())