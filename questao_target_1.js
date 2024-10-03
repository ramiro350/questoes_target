const prompt = require('prompt-sync')({sigint: true})

function fibonacci(n) {
    let fib = [0, 1];
    while (fib[fib.length - 1] <= n) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib;
}

function verificaFibonacci(num) {
    const fib = fibonacci(num);
    return fib.includes(num) ? `${num} pertence à sequência de Fibonacci.` : `${num} não pertence à sequência de Fibonacci.`
}

const numero = parseInt(prompt("Informe um número:"));
const resultado = verificaFibonacci(numero);
console.log(resultado);
