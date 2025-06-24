//Exercício 09
function paresParaObjeto(pares) {
  return Object.fromEntries(pares)
}
function objetoParaPares(obj) {
  return Object.entries(obj)
}
const pares = [['nome', 'Maria'], ['idade', 45]]
const obj = paresParaObjeto(pares)
console.log(obj)
const paresNovamente = objetoParaPares(obj)
console.log(paresNovamente)