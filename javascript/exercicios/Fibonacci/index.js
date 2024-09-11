function fibonacci(a){
    let fib1 = 0;
    let fib2 = 1;
    let fib3;
    let StringFibo = `${fib1} ${fib2} `;
     
    if(a <= 0){
        return "número inválido";
    }else if(a == 1){
        return fib1;
    }else if(a == 2){
        return `${fib1} ${fib2}`;
    } 
   
    for(let i = 0; i < a-2; i++){
        fib3 = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib3;

        StringFibo += `${fib3} `;
    }

    return StringFibo;
}

console.log(fibonacci(15));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(0));