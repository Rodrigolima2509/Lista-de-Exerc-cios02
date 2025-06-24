//Exercício 02
//Necessário rodas NPM Install para garantir que as dependências sejam carregadas.
const prompt = require('prompt-sync')()
const numeroSecreto = Math.floor(Math.random() * 100) + 1
let tentativa
let tentativas = 0

while (tentativa !== numeroSecreto) {
  // Pede um número ao usuário
  tentativa = Number(prompt("Adivinhe o número entre 1 e 100: "))
  tentativas++

  if (tentativa < numeroSecreto) {
    console.log(("Mais alto!"))
  } else if (tentativa > numeroSecreto) {
    console.log(("Mais baixo!"))
  } else {
    console.log(("Parabéns! Você acertou em " + tentativas + " tentativas!"))
  }
}