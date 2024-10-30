import PromptSync = require("prompt-sync");
const prompt = PromptSync();

function espacamentoDeStrings(texto: string, texto2: string, texto3: string): string {
    const totalCaracteres = 34;

    const espacamento = totalCaracteres - (texto.length + texto2.length + texto3.length);

    const espacosEntre1e2 = Math.floor(espacamento / 2);
    const espacosEntre2e3 = espacamento - espacosEntre1e2;

    let espacos1e2 = '';
    for (let i = 0; i < espacosEntre1e2; i++) {
        espacos1e2 += ' ';
    }

    let espacos2e3 = '';
    for (let i = 0; i < espacosEntre2e3; i++) {
        espacos2e3 += ' ';
    }

    return texto + espacos1e2 + texto2 + espacos2e3 + texto3;
}

let listaSistemasOperacionais: string[] = [];
console.log("1 - Windows Server\n2 - Unix\n3 - Linux\n4 - Netware\n5 - Mac OS\n6 - Outro\n0 - Sair");

while (true) {
    let sistema = prompt("Digite o número do sistema operacional: ");
    if (sistema === "0") {
        break;
    }

    switch (sistema) {
        case "1":
            listaSistemasOperacionais.push("Windows Server");
            break;
        case "2":
            listaSistemasOperacionais.push("Unix");
            break;
        case "3":
            listaSistemasOperacionais.push("Linux");
            break;
        case "4":
            listaSistemasOperacionais.push("Netware");
            break;
        case "5":
            listaSistemasOperacionais.push("Mac OS");
            break;
        case "6":
            listaSistemasOperacionais.push("Outro");
            break;
        default:
            console.log("Sistema operacional inválido.");
            break;
    }
}

const totalDeVotos = listaSistemasOperacionais.length;
const totalVotosWindows = listaSistemasOperacionais.filter(so => so === "Windows Server").length;
const totalVotosUnix = listaSistemasOperacionais.filter(so => so === "Unix").length;
const totalVotosLinux = listaSistemasOperacionais.filter(so => so === "Linux").length;
const totalVotosNetware = listaSistemasOperacionais.filter(so => so === "Netware").length;
const totalVotosMacOS = listaSistemasOperacionais.filter(so => so === "Mac OS").length;
const totalVotosOutro = listaSistemasOperacionais.filter(so => so === "Outro").length;

const porcentagemWindows = (totalVotosWindows / totalDeVotos) * 100;
const porcentagemUnix = (totalVotosUnix / totalDeVotos) * 100;
const porcentagemLinux = (totalVotosLinux / totalDeVotos) * 100;
const porcentagemNetware = (totalVotosNetware / totalDeVotos) * 100;
const porcentagemMacOS = (totalVotosMacOS / totalDeVotos) * 100;
const porcentagemOutro = (totalVotosOutro / totalDeVotos) * 100;



console.log(espacamentoDeStrings("Sistema Operacional", "Votos", "%"));
console.log("----------------------------------");
console.log(espacamentoDeStrings("Windows Server", totalVotosWindows.toString(), porcentagemWindows.toFixed(2).toString() + "%"));
console.log(espacamentoDeStrings("Unix", totalVotosUnix.toString(), porcentagemUnix.toFixed(2).toString() + "%"));
console.log(espacamentoDeStrings("Linux", totalVotosLinux.toString(), porcentagemLinux.toFixed(2).toString() + "%"));
console.log(espacamentoDeStrings("Netware", totalVotosNetware.toString(), porcentagemNetware.toFixed(2).toString() + "%"));
console.log(espacamentoDeStrings("Mac OS", totalVotosMacOS.toString(), porcentagemMacOS.toFixed(2).toString() + "%"));
console.log(espacamentoDeStrings("Outro", totalVotosOutro.toString(), porcentagemOutro.toFixed(2).toString() + "%"));
console.log("----------------------------------");
console.log(espacamentoDeStrings("Total", totalDeVotos.toString(), "100%"));
console.log("O Sistema Operacional com mais votos foi o " + listaSistemasOperacionais.sort((a, b) => listaSistemasOperacionais.filter(v => v === a).length - listaSistemasOperacionais.filter(v => v === b).length).pop() + " com " + listaSistemasOperacionais.filter(v => v === listaSistemasOperacionais.sort((a, b) => listaSistemasOperacionais.filter(v => v === a).length - listaSistemasOperacionais.filter(v => v === b).length).pop()).length + " votos.");