import PromptSync from "prompt-sync";
const prompt = PromptSync();

function conversorTemp() {
    while(true){
        let celsius = parseFloat(prompt("Digite uma temperatura em Celsius para conversão em Fahrenheit: "));
        const Fahrenheit = (celsius * (9 / 5)) + 32;
        
        if (isNaN(celsius)) {
            console.log("Por favor, insira um número válido.");
            continue;
        } else {
            console.log(`${celsius} ºC para Fahrenheit é equivalente à: ${Math.round(Fahrenheit)} ºF`);       
            break;
        }
    }
}

conversorTemp();