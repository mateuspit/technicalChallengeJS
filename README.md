
# Desafio Técnico 1

Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores
inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.






## Tecnologias
**Git & GitHub**

**Node**

**JavaScript**

**Docker**


## Uso com GitHub
1) Instalação do git:
```bash
sudo apt update

sudo apt upgrade

sudo apt install git
```
2) Instalação do node:
```bash
sudo apt-get update

sudo apt-get install -y ca-certificates curl gnupg

sudo mkdir -p /etc/apt/keyrings

curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg

NODE_MAJOR=20

echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list

sudo apt-get update

sudo apt-get install nodejs -y
```
3) Baixar o repositorio do git em sua maquina:

```bash
git clone https://github.com/mateuspit/tecnicalChallangeJS.git
```

4) A função requisitada está no arquivo: `sumThreeAndFiveMultipleUnitl.js`
5) Para utiliza-la você pode importa-la:
```javascript
import sumThreeAndFiveMultiplesUntil from "./sumThreeAndFiveMultipleUnitl.js"
```
6) Exemplo de utilização após importa-la:

```javascript
let input = 10;

sumThreeAndFiveMultiplesUntil(input);
```

7) Executando o código JavaScript usando Node:
```bash
node application.js
```

#### Screenshots

![App Screenshot](https://i.imgur.com/LbihnFh.png)


## Uso com Docker

1) Instalação do Docker:
```bash
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done

sudo apt-get update

sudo apt-get install ca-certificates curl gnupg

sudo install -m 0755 -d /etc/apt/keyrings

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

sudo chmod a+r /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

2) Verificar instalação do Docker:
```bash
sudo docker run hello-world
```

3) Baixar a imagem `matezao/technical-challenge-js-barcelos` do Docker Hub:
```bash
docker pull matezao/technical-challenge-js-barcelos:latest
```

4) Verificar se a imagem foi baixada: 
```bash
docker images
```

5) Montar a imagem 
```bash
docker run -it matezao/technical-challenge-js-barcelos:latest
```

#### Screenshots

![App Screenshot](https://i.imgur.com/qoU5Iqm.png)

## Aplicação

Para a utilização da função implementada em JavaScript, foi criado um arquivo chamado `application.js` que solicita ao usuário a inserção de uma entrada, com tratamento de possíveis erros.


#### Screenshots

![App Screenshot](https://i.imgur.com/zDVOljA.png)
## Testes

Foi desenvolvida uma função denominada `testFunctionCases()`, a qual utiliza um array de entradas de teste para gerar saídas conforme o comportamento esperado da função requisitada.

#### Possíveis erros

1. A entrada recebida não é um número!
2. O número recebido não é positivo!
3. Overflow no número de entrada!
4. Overflow durante a soma!

#### Screenshots

![App Screenshot](https://i.imgur.com/oXrgVKR.png)
## Observações

Em situações de erro, também é possível interromper a execução da aplicação, que utiliza a função, por meio do comando `throw new Error`, como ilustrado no exemplo abaixo:
```javascript
throw new Error(ERROR_TYPE);
```
Outra abordagem para simplificar o código é utilizar um único retorno de erro para a validação da entrada e outro para casos de overflow. No entanto, ao considerar a interação com o front-end, optei por fornecer ao usuário explicações claras para os quatro possíveis cenários de erro citados acima.

É relevante notar que, quando a string fornecida representa um número, a entrada é convertida para o tipo number.

Constantes foram declaradas para evitar o uso de "magic numbers" e "magic strings".
## Referências

- [Instalação do GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Instalação do Node](https://github.com/nodesource/distributions)
- [Instalação do Docker](https://docs.docker.com/engine/install/ubuntu/)
- [Guia Markdown](https://www.markdownguide.org/)
## Repositórios

- [GitHub](https://github.com/mateuspit/technicalChallengeJS)
- [DockerHub](https://hub.docker.com/repository/docker/matezao/technical-challenge-js-barcelos/general)
## Autor

- [@Mateus Barcelos](https://www.github.com/mateuspit)

Qualquer dúvidas: mateuspit@gmail.com ou pelo whastapp: [+55 61 98144 1074](https://api.whatsapp.com/send?phone=5561981441074&text=Oi%20Vi%20seu%20codigo%20no%20GitHub%20e...).
