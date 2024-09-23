var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
    Pessoa.prototype.apresentar = function () {
        return "Ol\u00E1, meu nome \u00E9 ".concat(this.nome, ", tenho ").concat(this.idade, " anos e meu email \u00E9 ").concat(this.email);
    };
    return Pessoa;
}());
var pessoa = new Pessoa("Daniel", 18, "danielgalfla12@gmail.com");
console.log(pessoa.apresentar());
