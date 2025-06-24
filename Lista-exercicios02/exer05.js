//Exercício 05

function debounce(fn, delay) {
  let timer = null

  return function (...args) {
    // Cancela o timer anterior, se existir
    clearTimeout(timer)

    // Cria um novo timer
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  };
}