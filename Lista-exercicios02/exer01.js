//Exercício 01
//Necessário rodas NPM Install para garantir que as dependências sejam carregadas.
const prompt = require('prompt-sync')()
function ehDataValida(dia, mes, ano) {
  const data = new Date(ano, mes - 1, dia)
  return data.getFullYear() === ano &&
         data.getMonth() === mes - 1 &&
         data.getDate() === dia
}
// Captura os dados do usuário
let dia = parseInt(prompt("Digite o dia: "))
let mes = parseInt(prompt("Digite o mês: "))
let ano = parseInt(prompt("Digite o ano: "))

    // Verifica se é uma data válida e exibe o resultado
if (ehDataValida(dia, mes, ano)) {
  console.log("✅ Data válida: " + dia + "/" + mes + "/" + ano)
} else {
  console.log("❌ Data inválida! Por favor, insira uma data real.")
}
if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log('Este é um ano bissexto.')
} else{
    console.log('Este não é um ano bissexto.')
}
