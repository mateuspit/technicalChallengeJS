import sumThreeAndFiveMultiplesUntil from "./sumThreeAndFiveMultiplesUntil.js";

export default function testFunctionCases() {
    let testCases =
        [
            "a",
            true,
            false,
            - 5,
            "10",
            0,
            10,
            11,
            9999999999999999,
            999999999999999
        ]

    for (let i = 0; i < testCases.length; i++) {
        const input = testCases[i];
        const output = sumThreeAndFiveMultiplesUntil(input);

        console.log(`Test Case ${i + 1}:`);
        console.log(`Entrada: ${input}`);
        console.log(`Saída: ${output}`);
        console.log("".padEnd(30, "-"));
    }
}