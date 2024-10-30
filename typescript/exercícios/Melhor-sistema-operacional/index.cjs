"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
function espacamentoDeStrings(texto, texto2, texto3) {
    var totalCaracteres = 34;
    var espacamento = totalCaracteres - (texto.length + texto2.length + texto3.length);
    var espacosEntre1e2 = Math.floor(espacamento / 2);
    var espacosEntre2e3 = espacamento - espacosEntre1e2;
    var espacos1e2 = '';
    for (var i = 0; i < espacosEntre1e2; i++) {
        espacos1e2 += ' ';
    }
    var espacos2e3 = '';
    for (var i = 0; i < espacosEntre2e3; i++) {
        espacos2e3 += ' ';
    }
    return texto + espacos1e2 + texto2 + espacos2e3 + texto3;
}
var listaSistemasOperacionais = [];
console.log("1 - Windows Server\n2 - Unix\n3 - Linux\n4 - Netware\n5 - Mac OS\n6 - Outro\n0 - Sair");
while (true) {
    var sistema = prompt("Digite o número do sistema operacional: ");
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
var totalDeVotos = listaSistemasOperacionais.length;
var totalVotosWindows = listaSistemasOperacionais.filter(function (so) { return so === "Windows Server"; }).length;
var totalVotosUnix = listaSistemasOperacionais.filter(function (so) { return so === "Unix"; }).length;
var totalVotosLinux = listaSistemasOperacionais.filter(function (so) { return so === "Linux"; }).length;
var totalVotosNetware = listaSistemasOperacionais.filter(function (so) { return so === "Netware"; }).length;
var totalVotosMacOS = listaSistemasOperacionais.filter(function (so) { return so === "Mac OS"; }).length;
var totalVotosOutro = listaSistemasOperacionais.filter(function (so) { return so === "Outro"; }).length;
var porcentagemWindows = (totalVotosWindows / totalDeVotos) * 100;
var porcentagemUnix = (totalVotosUnix / totalDeVotos) * 100;
var porcentagemLinux = (totalVotosLinux / totalDeVotos) * 100;
var porcentagemNetware = (totalVotosNetware / totalDeVotos) * 100;
var porcentagemMacOS = (totalVotosMacOS / totalDeVotos) * 100;
var porcentagemOutro = (totalVotosOutro / totalDeVotos) * 100;
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
console.log("O Sistema Operacional com mais votos foi o " + listaSistemasOperacionais.sort(function (a, b) { return listaSistemasOperacionais.filter(function (v) { return v === a; }).length - listaSistemasOperacionais.filter(function (v) { return v === b; }).length; }).pop() + " com " + listaSistemasOperacionais.filter(function (v) { return v === listaSistemasOperacionais.sort(function (a, b) { return listaSistemasOperacionais.filter(function (v) { return v === a; }).length - listaSistemasOperacionais.filter(function (v) { return v === b; }).length; }).pop(); }).length + " votos.");
