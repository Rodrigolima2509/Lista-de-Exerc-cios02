//Exercício 08
function somarVendasPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    const { cliente, total } = venda
    if (!acumulador[cliente]) {
      acumulador[cliente] = 0
    }
    acumulador[cliente] += total
    return acumulador;
  }, {})
}
const vendas = [
  { cliente: 'Cláudio', total: 100 },
  { cliente: 'Cláudio', total: 80 },
  { cliente: 'João', total: 200 },
  { cliente: 'Márcio', total: 200 },
  { cliente: 'João', total: 150 },
  { cliente: 'Ana', total: 50 },
  { cliente: 'Ana', total: 80 }
]
const resultado = somarVendasPorCliente(vendas);
console.log(resultado)