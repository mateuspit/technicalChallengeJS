//Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores
//inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.

export default function sumThreeAndFiveMultiplesUntil(inputNumber) {
    let sum = 0;
    let isNumber = typeof inputNumber === 'number';
    let isPositive = inputNumber > 0;
    let isThreeMultiple, isFiveMultiple = false;

    if (isNumber) {
        if (isPositive || inputNumber === 0) {
            for (let i = 0; i < inputNumber; i++) {
                isThreeMultiple = !(i % 3);
                isFiveMultiple = !(i % 5);
                if (isThreeMultiple || isFiveMultiple) {
                    sum += i;
                }
            }
            return console.log(sum);
        }
        else {
            return console.log("O número recebido não é positivo!")
        }
    }
    else {
        return console.log("A entrada recebida não é um número!")
    }
}