function calcularMedia(lista: number[]): number {
  const total = lista.reduce((total, atual) => total + atual, 0);
  return total / lista.length;
}

function calcularMediana(lista: number[]): number{
    const tamanho = lista.length;
    
    if (tamanho % 2 === 0) {
        return (lista[tamanho / 2]);
    }else{
        return (lista[Math.ceil(tamanho / 2)]);
    }
}

function calcularModa(lista: number[]): number{
    let moda = 0;
    let maxCount = 0;

    lista.forEach(numero => {
        let count = lista.filter(x => x === numero).length;
        if(count > maxCount){
            moda = numero;
            maxCount = count;
        }
    });

    return moda;
}

const numeros = [1, 2, 2, 3, 4, 4, 4, 5, 5];    

console.log("Média:", calcularMedia(numeros));
console.log("Mediana:", calcularMediana(numeros));
console.log("Moda:", calcularModa(numeros));