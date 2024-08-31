function sacar(valor){
    let valorAtual = valor
    let notasDeCem = 0;
    let notasDeCinquenta = 0;
    let notasDeDez = 0;

    if(valorAtual > 0){
        if(valorAtual % 10 != 0){

            return "Valor não é múltiplo de 10";

        } else{
            if (valorAtual >= 100){
                notasDeCem = Math.floor(valorAtual / 100)
                valorAtual -= (100*notasDeCem)
            }
            if (valorAtual >= 50){
                notasDeCinquenta = Math.floor(valorAtual / 50)
                valorAtual -= (50*notasDeCinquenta)	
            }
            if (valorAtual >= 10){
                notasDeDez = Math.floor(valorAtual / 10)
                valorAtual -= (10*notasDeDez)
            }
            return `Notas de 100: ${notasDeCem}, notas de 50: ${notasDeCinquenta}, notas de 10: ${notasDeDez}`
        }  

    } else {
        return "Valor inválido";
    }
}

console.log(sacar(100));
console.log(sacar(276));
console.log(sacar(270));