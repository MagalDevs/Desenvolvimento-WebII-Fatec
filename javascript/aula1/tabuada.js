import PromptSync from "prompt-sync";
const prompt = PromptSync();

let numero = prompt("Quer ver a tabuada de qual número: ");
let tabuada = prompt("Até qual multiplicador deseja ver: ");

for (let i = 0; i <= tabuada; i++) {
    console.log(`${numero} X ${i} = ${numero*i}`);
}