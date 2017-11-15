#VotoChain

DAPP basada en Solidity desarrollada para solucionar la corrupcion en el actual sistema de votacion.

## Como empezar

Primero, asegurase de tener el repositorio de VotoCahin el cual puede ser encontrado en https://github.com/sdmunozsierra/VotoChain

Necesitara dos terminales para probar VotoChain.
En la primera terminal ingrese el comando:

`testrpc --gasLimit 6721975 --gasPrice 100000000000`

En la segunda terminal dirijase al directorio de VotoChain e ingrese la siguiente serie de comandos:

`truffle compile`

Luego:

`truffle migrate `

Y finalmente:

`npm run dev`

Este ultimo le permitira ver la UI en Google Chrome.
Para hacerlo ingrese

`http://localhost:8080`

en su navegador.

## Prerequisitos

Google Chrome, requerido para utilizar MetaMask.

MetaMask, permite utilizar los Thereum dApps desde el navegador (solo disponible para Google Chorme).

Repositorio de VotoChain, disponible en https://github.com/sdmunozsierra/VotoChain.

Truffle Framework, disponible ingresando el siguente comando en la terminal.
$ npm install -g truffle

Node.js, disponible para descarga gratuita en https://nodejs.org/en/download/.

webpack-dev-server deberia estar incluido al momento de instalar Node.js. En ciertos casos este a faltado. Si eso ocurre ingrese el siguiente comando en su terminal.
npm install webpack-dev-server -g

## Built With

Solidity - Usado para escribir los SmartContracts.

Truffle - Framework diseñado para desplegar contratos.

testrpc - Cliente diseñado para pruebas y desarrollo de Ethereum.

Node.js - Package manager en el que se ejecutan los Scripts.

## Authors

Marco Alanis

Carlos Jimenez

Sergio Muñoz

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Reconocimientos

Sergio el mentor
