// ================================================================
// DESAFIO REDUCE-04 — Agrupar por Categoria  [MÉDIO]
// ================================================================
//
// Você recebe um array de objetos de produtos, cada um com:
//   { nome, categoria, preco }
//
// Retorne um OBJETO onde cada chave é uma categoria, e o valor
// é um objeto com:
//   - itens: array com os NOMES dos produtos dessa categoria (em ordem de chegada)
//   - total: soma dos preços dos produtos dessa categoria (arredondado em 2 casas)
//   - quantidade: número de produtos dessa categoria
//   - maisBarato: nome do produto mais barato da categoria
//   - maisCaro: nome do produto mais caro da categoria
//
// Regras:
//  - Use obrigatoriamente o método .reduce()
//  - Não use loops for/while/forEach dentro do reduce
//  - Array vazio deve retornar {}
//  - Não modifique o array original
//
// Exemplo:
//   entrada: [
//     { nome: "Banana", categoria: "Frutas", preco: 3.5 },
//     { nome: "Maçã",   categoria: "Frutas", preco: 7.0 },
//     { nome: "Arroz",  categoria: "Grãos",  preco: 5.0 },
//   ]
//   saída: {
//     Frutas: { itens: ["Banana", "Maçã"], total: 10.5, quantidade: 2,
//               maisBarato: "Banana", maisCaro: "Maçã" },
//     Grãos:  { itens: ["Arroz"], total: 5.0, quantidade: 1,
//               maisBarato: "Arroz", maisCaro: "Arroz" },
//   }
//
// ================================================================

function agruparPorCategoria(produtos) {
  // Escreva sua solução aqui
}

// ================================================================
// TESTES — execute o arquivo para ver os resultados
// ================================================================

const estoque = [
  { nome: "Banana",    categoria: "Frutas",    preco: 3.5  },
  { nome: "Maçã",      categoria: "Frutas",    preco: 7.0  },
  { nome: "Laranja",   categoria: "Frutas",    preco: 4.0  },
  { nome: "Arroz",     categoria: "Grãos",     preco: 5.0  },
  { nome: "Feijão",    categoria: "Grãos",     preco: 8.5  },
  { nome: "Leite",     categoria: "Laticínios",preco: 4.5  },
  { nome: "Queijo",    categoria: "Laticínios",preco: 25.0 },
  { nome: "Iogurte",   categoria: "Laticínios",preco: 6.0  },
];

const esperado = {
  Frutas: {
    itens: ["Banana", "Maçã", "Laranja"],
    total: 14.5,
    quantidade: 3,
    maisBarato: "Banana",
    maisCaro: "Maçã",
  },
  Grãos: {
    itens: ["Arroz", "Feijão"],
    total: 13.5,
    quantidade: 2,
    maisBarato: "Arroz",
    maisCaro: "Feijão",
  },
  Laticínios: {
    itens: ["Leite", "Queijo", "Iogurte"],
    total: 35.5,
    quantidade: 3,
    maisBarato: "Leite",
    maisCaro: "Queijo",
  },
};

const testes = [
  {
    descricao: "array vazio retorna {}",
    resultado: () => agruparPorCategoria([]),
    checar: (r) => JSON.stringify(r) === JSON.stringify({}),
  },
  {
    descricao: "grupo Frutas correto",
    resultado: () => agruparPorCategoria(estoque),
    checar: (r) => JSON.stringify(r.Frutas) === JSON.stringify(esperado.Frutas),
  },
  {
    descricao: "grupo Grãos correto",
    resultado: () => agruparPorCategoria(estoque),
    checar: (r) => JSON.stringify(r.Grãos) === JSON.stringify(esperado.Grãos),
  },
  {
    descricao: "grupo Laticínios correto",
    resultado: () => agruparPorCategoria(estoque),
    checar: (r) => JSON.stringify(r.Laticínios) === JSON.stringify(esperado.Laticínios),
  },
  {
    descricao: "produto único na categoria: maisBarato === maisCaro",
    resultado: () => agruparPorCategoria([{ nome: "Arroz", categoria: "Grãos", preco: 5 }]),
    checar: (r) => r.Grãos.maisBarato === "Arroz" && r.Grãos.maisCaro === "Arroz",
  },
  {
    descricao: "array original não foi modificado",
    resultado: () => { agruparPorCategoria(estoque); return estoque[0]; },
    checar: (r) => r.nome === "Banana" && r.categoria === "Frutas" && r.preco === 3.5,
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
