//Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores
//inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.

export default function sumThreeAndFiveMultiplesUntil(inputNumber) {
    const THREE = 3;
    const FIVE = 5;
    const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
    const ERROR_NOT_NUMBER = "A entrada recebida não é um número!";
    const ERROR_NOT_POSITIVE_NUMBER = "O número recebido não é positivo!";
    const ERROR_OVERFLOW_INPUT = "Overflow no número de entrada!";
    const ERROR_OVERFLOW_SUM = "Overflow durante a soma!";

    let sum = 0;

    if (inputNumber > MAX_SAFE_INTEGER) {
        return ERROR_OVERFLOW_INPUT;
    }

    const parsedNumber = parseInt(inputNumber);

    if (isNaN(parsedNumber) || typeof parsedNumber !== 'number') {
        return ERROR_NOT_NUMBER;
    }

    if (parsedNumber < 0) {
        return ERROR_NOT_POSITIVE_NUMBER;
    }

    for (let i = 0; i < parsedNumber; i++) {
        if (!(i % THREE) || !(i % FIVE)) {
            if (sum + i > MAX_SAFE_INTEGER) {
                return ERROR_OVERFLOW_SUM;
            }
            sum += i;
        }
    }

    return sum;
}