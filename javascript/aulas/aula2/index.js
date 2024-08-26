function somar(a,b){
    const total = a + b
    return Number(total)
}

function calcular(a,b,operacao){
    const resultado = operacao(a,b)
    console.log(resultado)
    return resultado
}

console.log(calcular(20,30,somar))

// -> calcular a=20 e b=30 e operacao = fn somar()
// -> somar a=20 e b=30 e total = 50

function imprimir(texto){
    console.log(texto)
    return texto
}

const teste = somar(10,20)
const a = imprimir(teste)

const atalho = console.log
const atalho2 = somar

const sub = (a,b) => {
    return a - b
}

calcular(30,20,function sub(a,b){
    //
})

calcular(30,20,(a,b)=>{
    //
})