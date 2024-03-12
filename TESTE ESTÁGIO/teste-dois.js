function fibonacciSequence(n) {
    let fibonacci = [0, 1]
    while (fibonacci[fibonacci.length - 1] < n) {
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2])
    }
    return fibonacci
}

function verificaFibonacci(numero) {
    let fibonacci = fibonacciSequence(numero)
    if (fibonacci.includes(numero)) {
        return `O número ${numero} pertence à sequência de Fibonacci.`
    } else {
        return `O número ${numero} não pertence à sequência de Fibonacci.`
    }
}

let numeroInformado = parseInt(prompt("Informe um número para verificar se pertence à sequência de Fibonacci:"))
console.log(verificaFibonacci(numeroInformado))

