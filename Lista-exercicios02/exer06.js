//Exercício 06
function memoize(fn) {
  const cache = {}

  return function(arg) {
    if (arg in cache) {
      return cache[arg] // retorna do cache se já tiver o resultado
    }
    const result = fn(arg) // calcula o resultado
    cache[arg] = result   // armazena no cache
    return result
  }
}