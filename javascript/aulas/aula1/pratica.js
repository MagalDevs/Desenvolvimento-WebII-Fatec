import PromptSync from "prompt-sync";

const prompt = PromptSync()
const valorinicial = Number(prompt("Digite o saldo inicial: "));
const valorTriplicado = valorinicial*3;
let mes = 0;
const acrescimo = Number(prompt("Digite a taxa mensal:"));
let valor = valorinicial;
while (valor < valorTriplicado) {
    valor *= acrescimo
    mes++
    console.log(`${mes}° mês - R$${valor}`) 
}
console.log(`Demorou ${mes} meses para o valor de R$${valorinicial} chegar ao valor de R$${valorTriplicado}`)