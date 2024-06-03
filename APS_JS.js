// Função para verificar se um número é primo
function isPrimo(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Função para encontrar os 10 maiores números primos a partir de um número fornecido
function encontrarMaioresPrimos(numeroInicial) {
    let primosEncontrados = [];
    let numeroAtual = numeroInicial + 1; // Começa a busca a partir do próximo número
    while (primosEncontrados.length < 10) {
        if (isPrimo(numeroAtual)) {
            primosEncontrados.push(numeroAtual);
        }
        numeroAtual++;
    }
    return primosEncontrados;
}

// Função para verificar se um número inserido é primo
function verificarNumeroPrimo(numero) {
    if (isPrimo(numero)) {
        console.log(numero + " é um número primo.");
    } else {
        console.log(numero + " não é um número primo.");
    }
}

// Solicita um número ao usuário
let numero = parseInt(prompt("Digite um número:"));

// Verifica se o número inserido é primo
verificarNumeroPrimo(numero);

// Encontra os 10 maiores números primos após o número inserido
let maioresPrimos = encontrarMaioresPrimos(numero);

// Exibe os resultados
console.log("Os 10 maiores números primos após " + numero + " são:");
console.log(maioresPrimos);





//Aluno: Douglas Jerônimo Souza Ferreira
//Turma 963R
//Polo: Méier 
//Turna: Noite 
