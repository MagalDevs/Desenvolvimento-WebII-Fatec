const pessoa1 = {
    nome: "Pessoa 1",
    idade: 30,
    hobbies: ["Esporte", "Música", "Leitura"]
}

console.log(pessoa1.nome);
pessoa1.cpf = "123.456.789-00";

pessoa1.hobbies.push("Cinema");

console.log(pessoa1);

function criaPessoas(nome, idade, hobbies){
    return{
        nome,
        idade, 
        hobbies
    }
}

const pessoa2 = criaPessoas("Pessoa 2", 25, ["Esporte", "Música"]);

const pessoa2Json = JSON.stringify(pessoa2);
console.log(pessoa2Json);

console.log(JSON.parse(pessoa2Json));

//Classes
class Pessoa{
    constructor(nome, idade, hobbies){
        this.nome = nome;
        this.idade = idade;
        this.hobbies = hobbies;
        this.cpf = '';
    }

    meApresentar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const pessoa3 = new Pessoa("Pessoa 3", 35, ["Esporte", "Música"]);
pessoa3.idade = 10
console.log(pessoa3);
pessoa3.meApresentar();