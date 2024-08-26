import PromptSync from "prompt-sync"
const prompt = PromptSync();

function conversorTemp(){
    let celsius = prompt("Digite uma temperatura em Celsius para conversão em Fahrenheit: ");
    const Fahrenheit = (celsius * (9/5)) + 32;
    console.log(`${celsius} ºC para Fahrenheit é equivalente à: ${Math.round(Fahrenheit)} ºF`)
}

conversorTemp();