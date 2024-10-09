function calcularMedia(lista) {
    var total = lista.reduce(function (total, atual) { return total + atual; }, 0);
    return total / lista.length;
}
function calcularMediana(lista) {
    var tamanho = lista.length;
    if (tamanho % 2 === 0) {
        return (lista[tamanho / 2]);
    }
    else {
        return (lista[Math.ceil(tamanho / 2)]);
    }
}
function calcularModa(lista) {
    var moda = 0;
    var maxCount = 0;
    lista.forEach(function (numero) {
        var count = lista.filter(function (x) { return x === numero; }).length;
        if (count > maxCount) {
            moda = numero;
            maxCount = count;
        }
    });
    return moda;
}
var numeros = [1, 2, 2, 3, 4, 4, 4, 5, 5];
console.log("Média:", calcularMedia(numeros));
console.log("Mediana:", calcularMediana(numeros));
console.log("Moda:", calcularModa(numeros));
