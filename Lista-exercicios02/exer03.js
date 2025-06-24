//Exercício 03
function palavrasUnicas(frase) {
  const palavras = frase.split(" ")
  const unicas = []

  for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i]
    let contador = 0

    // Contar quantas vezes essa palavra aparece
    for (let j = 0; j < palavras.length; j++) {
      if (palavras[j] === palavra) {
        contador++
      }
    }
    // Se apareceu só uma vez, adiciona no array de únicas
    if (contador === 1) {
      unicas.push(palavra)
    }
  }
  return unicas
}
// Testando com a frase fornecida
const resultado = palavrasUnicas("Olá Olá mundo cruel cruel outra vez.")
console.log(resultado) 