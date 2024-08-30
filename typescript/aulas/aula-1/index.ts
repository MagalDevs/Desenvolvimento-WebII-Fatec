import PromptSync from 'prompt-sync'
const prompt = PromptSync()

function calcularArea(lado: number): number{
    return lado * lado
}

const numDigitado = Number(prompt("Digite um num: "))

const quadrado = calcularArea(numDigitado)
console.log(quadrado)

type situacao = 'aprovado' | 'reprovado'
interface Aluno {
    nome: string
    mediaFinal: number
    situacao: situacao
}

const aluno: Aluno = {
    nome: "",
    mediaFinal: 9,
    situacao: "aprovado"
}

const aluno2: Aluno = {
    nome: "Teste 2",
    mediaFinal: 0,
    situacao: "reprovado"
}

function alunoFactory(nome: string, mediaFinal: number): Aluno{
    let situacao: situacao = 'reprovado'
    if(mediaFinal > 6){
        situacao = 'aprovado'
    }

    return {
        nome: nome,
        mediaFinal,
        situacao
    }
}

const aluno3 = alunoFactory('Teste 3',9)
console.log(aluno3.situacao)
