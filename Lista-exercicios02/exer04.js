//Exercício 04
//Necessário rodas NPM Install para garantir que as dependências sejam carregadas.
const prompt = require('prompt-sync')()
function fatorial(n) {
  if (n < 0) {
    console.log("Erro: não existe fatorial de número negativo!")
    return null
  }
  if (n === 0) {
    return 1
  }
  return n * fatorial(n - 1)
}
// Captura o número do usuário
const entrada = Number(prompt("Digite um número para calcular o fatorial:"))
const resultado = fatorial(entrada)
// Mostra o resultado se for válido
if (resultado !== null) {
  console.log("O fatorial de " + entrada + " é: " + resultado)
}

