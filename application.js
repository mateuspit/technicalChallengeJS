import sumThreeAndFiveMultiplesUntil from "./sumThreeAndFiveMultiplesUntil.js";
import readline from "readline";
import testFunctionCases from "./testFunctionCases.js";

const MENU_OPTIONS = {
    ENTER_NUMBER: "Entre com qualquer número inteiro positivo para utilizar a função.",
    TEST_CASES: '"Teste" para ver alguns casos de testes para a função.',
    EXIT: '"Sair" para sair...'
};

const MENU = `Escolha uma opção:\n${MENU_OPTIONS.ENTER_NUMBER}\n${MENU_OPTIONS.TEST_CASES}\n${MENU_OPTIONS.EXIT}\nOpção: `;
const CONSOLE_SPACE_BETWEEN_MENU = `\n\n`;
const CONSOLE_SPACE_NEW_MENU = `\n`;
const BACK_TO_MENU_TEXT = `Retornando para o menu...`;
const EXIT_TEXT = `Saindo...`;
const OPTION_TEST = `teste`;
const OPTION_EXIT = `sair`;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleUserChoice(option) {
    const parsedOption = option.toLowerCase();
    switch (parsedOption) {
        case OPTION_TEST:
            console.log(CONSOLE_SPACE_BETWEEN_MENU);
            testFunctionCases();
            console.log(CONSOLE_SPACE_NEW_MENU);
            console.log(BACK_TO_MENU_TEXT);
            waitForUserInput();
            break;
        case OPTION_EXIT:
            console.log(EXIT_TEXT);
            rl.close();
            process.exit(0);
        default:
            console.log(CONSOLE_SPACE_BETWEEN_MENU);
            console.log(`Entrada: ${parsedOption}\nSaída: ${sumThreeAndFiveMultiplesUntil(parsedOption)}\n`);
            console.log(CONSOLE_SPACE_NEW_MENU);
            console.log(BACK_TO_MENU_TEXT);
            waitForUserInput();
            break;
    }
}

function waitForUserInput() {
    rl.question(MENU, handleUserChoice);
}

waitForUserInput();
