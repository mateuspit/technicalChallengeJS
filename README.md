
# Desafio Técnico 1

Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores
inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.






## Tecnologias
**Git & GitHub**

**Node**

**JavaScript**


## Uso/Exemplo (Sistema operacional: Debian)
1) Instalação do git:

```bash
sudo apt update

sudo apt upgrade

sudo apt install git
```
2) Instalação do node:
```bash
curl -sL https://deb.nodesource.com/setup\_13.x | sudo -E bash -

sudo apt install nodejs
```
3) Baixar o repositorio do git em sua maquina:

```bash
git clone https://github.com/mateuspit/tecnicalChallangeJS.git
```

4) A função está no arquivo: sumThreeAndFiveMultipleUnitl.js
5) Para utiliza-la você pode importa-la:
```javascript
import sumThreeAndFiveMultiplesUntil from "./sumThreeAndFiveMultipleUnitl.js"
```
6) Exemplo de utilização após importa-la:

```javascript
sumThreeAndFiveMultiplesUntil(10);
```

7) Exemplo com importação e utilização da função. Foi criado o arquivo application.js:
```javascript
import sumThreeAndFiveMultiplesUntil from "./sumThreeAndFiveMultipleUnitl.js";

console.log(sumThreeAndFiveMultiplesUntil("a"));
console.log(sumThreeAndFiveMultiplesUntil(true));
console.log(sumThreeAndFiveMultiplesUntil(false));
console.log(sumThreeAndFiveMultiplesUntil(-5));
console.log(sumThreeAndFiveMultiplesUntil("10"));
console.log(sumThreeAndFiveMultiplesUntil(0));
console.log(sumThreeAndFiveMultiplesUntil(10));
console.log(sumThreeAndFiveMultiplesUntil(11));
console.log(sumThreeAndFiveMultiplesUntil(9999999999999999));
console.log(sumThreeAndFiveMultiplesUntil(999999999999999));
```

8) Executando o código JavaScript usando Node:
```bash
node application.js
```


## Screenshots

![App Screenshot](https://i.imgur.com/b2pHMxW.png)


## Autor

- [@Mateus Barcelos](https://www.github.com/mateuspit)

Qualquer dúvidas: mateuspit@gmail.com ou pelo whastapp: [+55 61 98144 1074](https://api.whatsapp.com/send?phone=5561981441074&text=Oi%20Vi%20seu%20codigo%20no%20GitHub%20e...).
