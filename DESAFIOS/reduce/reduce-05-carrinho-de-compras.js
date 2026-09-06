// ================================================================
// DESAFIO REDUCE-05 — Carrinho de Compras  [DIFÍCIL]
// ================================================================
//
// Você recebe um array de itens de um carrinho de compras. Cada item:
//   { nome, categoria, preco, quantidade, desconto }
//     - preco: preço unitário em reais
//     - quantidade: quantas unidades
//     - desconto: percentual de desconto do item (0 a 100)
//
// Em UM ÚNICO .reduce(), calcule e retorne um objeto com:
//   - totalBruto: soma de (preco * quantidade) de todos os itens
//   - totalDesconto: soma dos descontos aplicados
//   - totalLiquido: totalBruto - totalDesconto (valor a pagar)
//   - totalItens: soma de todas as quantidades
//   - porCategoria: objeto onde cada chave é a categoria e o valor
//                   é o total líquido gasto naquela categoria
//   - itemMaisCaro: nome do item com maior preço unitário
//   - itemMaisBarato: nome do item com menor preço unitário
//   - mediaPrecoUnitario: média dos preços unitários (2 casas decimais)
//
// Regras:
//  - Use obrigatoriamente .reduce() UMA ÚNICA VEZ (sem chamar reduce
//    múltiplas vezes, sem for/while/forEach fora do reduce)
//  - Todos os valores monetários arredondados para 2 casas decimais
//  - Array vazio deve retornar null
//  - Não modifique o array original
//
// Dica: o acumulador do reduce pode ser um objeto com múltiplos campos!
//       Inicialize o acumulador com todos os campos que vai precisar.
//
// ================================================================

function resumirCarrinho(itens) {
  // Escreva sua solução aqui
}

// ================================================================
// TESTES — execute o arquivo para ver os resultados
// ================================================================

const carrinho = [
  { nome: "Notebook",  categoria: "Eletrônicos", preco: 4000, quantidade: 1, desconto: 10 },
  { nome: "Mouse",     categoria: "Eletrônicos", preco: 80,   quantidade: 2, desconto: 0  },
  { nome: "Cadeira",   categoria: "Móveis",      preco: 1200, quantidade: 1, desconto: 20 },
  { nome: "Mesa",      categoria: "Móveis",      preco: 800,  quantidade: 1, desconto: 5  },
  { nome: "Headset",   categoria: "Eletrônicos", preco: 300,  quantidade: 1, desconto: 15 },
];

// Cálculos esperados:
// Notebook:  4000 * 1 = 4000 bruto, 400 desconto  => 3600 líquido
// Mouse:     80   * 2 = 160  bruto, 0   desconto  => 160  líquido
// Cadeira:   1200 * 1 = 1200 bruto, 240 desconto  => 960  líquido
// Mesa:      800  * 1 = 800  bruto, 40  desconto  => 760  líquido
// Headset:   300  * 1 = 300  bruto, 45  desconto  => 255  líquido
//
// totalBruto:       6460
// totalDesconto:    725
// totalLiquido:     5735
// totalItens:       6
// porCategoria:     { Eletrônicos: 4015, Móveis: 1720 }
// itemMaisCaro:     "Notebook"
// itemMaisBarato:   "Mouse"
// mediaPrecoUnitario: (4000+80+1200+800+300)/5 = 1276

const esperado = {
  totalBruto: 6460,
  totalDesconto: 725,
  totalLiquido: 5735,
  totalItens: 6,
  porCategoria: { Eletrônicos: 4015, Móveis: 1720 },
  itemMaisCaro: "Notebook",
  itemMaisBarato: "Mouse",
  mediaPrecoUnitario: 1276,
};

const testes = [
  {
    descricao: "array vazio retorna null",
    resultado: () => resumirCarrinho([]),
    checar: (r) => r === null,
  },
  {
    descricao: "totalBruto correto",
    resultado: () => resumirCarrinho(carrinho),
    checar: (r) => r?.totalBruto === esperado.totalBruto,
  },
  {
    descricao: "totalDesconto correto",
    resultado: () => resumirCarrinho(carrinho),
    checar: (r) => r?.totalDesconto === esperado.totalDesconto,
  },
  {
    descricao: "totalLiquido correto",
    resultado: () => resumirCarrinho(carrinho),
    checar: (r) => r?.totalLiquido === esperado.totalLiquido,
  },
  {
    descricao: "totalItens correto",
    resultado: () => resumirCarrinho(carrinho),
    checar: (r) => r?.totalItens === esperado.totalItens,
  },
  {
    descricao: "porCategoria correto",
    resultado: () => resumirCarrinho(carrinho),
    checar: (r) => JSON.stringify(r?.porCategoria) === JSON.stringify(esperado.porCategoria),
  },
  {
    descricao: "itemMaisCaro e itemMaisBarato corretos",
    resultado: () => resumirCarrinho(carrinho),
    checar: (r) => r?.itemMaisCaro === "Notebook" && r?.itemMaisBarato === "Mouse",
  },
  {
    descricao: "mediaPrecoUnitario correto",
    resultado: () => resumirCarrinho(carrinho),
    checar: (r) => r?.mediaPrecoUnitario === esperado.mediaPrecoUnitario,
  },
  {
    descricao: "array original não foi modificado",
    resultado: () => { resumirCarrinho(carrinho); return carrinho.length; },
    checar: (r) => r === 5,
  },
];

let passou = 0;
testes.forEach(({ resultado, checar, descricao }) => {
  const r = resultado();
  const ok = checar(r);
  console.log(`${ok ? "✓" : "✗"} [${descricao}]`);
  if (!ok) console.log(`   Recebido: ${JSON.stringify(r)}`);
  if (ok) passou++;
});
console.log(`\n${passou}/${testes.length} testes passaram.`);
