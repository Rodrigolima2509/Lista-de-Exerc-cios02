//Exercício 07
function ordenarNomesPorPreco(produtos) {
  return produtos
    .slice() // copia o array original para não modificar
    .sort((a, b) => a.preco - b.preco) // ordena por preço crescente
    .map(produto => produto.nome) // extrai apenas os nomes
}
const produtos = [
  { nome: 'Teclado', preco: 100 },
  { nome: 'Mouse', preco: 50 },
  { nome: 'Monitor', preco: 1500 },
  { nome: 'Mouse-pad', preco: 120 },
  { nome: 'Gabinete', preco: 1200 }
]
const nomesOrdenados = ordenarNomesPorPreco(produtos)
console.log(nomesOrdenados)