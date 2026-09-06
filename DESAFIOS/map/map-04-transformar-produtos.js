// ================================================================
// DESAFIO MAP-04 — Transformar Lista de Produtos  [MÉDIO]
// ================================================================
//
// Você recebe um array de objetos representando produtos de uma loja.
// Cada produto tem: { nome, preco, desconto }
//   - nome: string com o nome do produto
//   - preco: número (preço original em reais)
//   - desconto: número entre 0 e 100 (percentual de desconto)
//
// Retorne um NOVO array de objetos, onde cada objeto tem:
//   - nome: string (mantém o mesmo)
//   - precoFinal: número arredondado em 2 casas decimais (preço após desconto)
//   - economizou: número arredondado em 2 casas decimais (quanto foi economizado)
//   - etiqueta: string no formato "NOME — R$ PREÇO_FINAL (Economize X%)"
//             ex: "Notebook — R$ 4500.00 (Economize 10%)"
//             se desconto = 0: "Notebook — R$ 5000.00 (Sem desconto)"
//
// Regras:
//  - Use obrigatoriamente o método .map()
//  - Não modifique o array original
//  - Preços formatados sempre com 2 casas decimais
//
// Exemplos:
//   entrada: [{ nome: "Notebook", preco: 5000, desconto: 10 }]
//   saída:   [{ nome: "Notebook", precoFinal: 4500.00, economizou: 500.00,
//              etiqueta: "Notebook — R$ 4500.00 (Economize 10%)" }]
//
//   entrada: [{ nome: "Mouse", preco: 80, desconto: 0 }]
//   saída:   [{ nome: "Mouse", precoFinal: 80.00, economizou: 0.00,
//              etiqueta: "Mouse — R$ 80.00 (Sem desconto)" }]
//
// ================================================================

function transformarProdutos(produtos) {
  // Escreva sua solução aqui
}

// ================================================================
// TESTES — execute o arquivo para ver os resultados
// ================================================================

const produtos = [
  { nome: "Notebook",  preco: 5000, desconto: 10 },
  { nome: "Mouse",     preco: 80,   desconto: 0  },
  { nome: "Teclado",   preco: 200,  desconto: 25 },
  { nome: "Monitor",   preco: 1800, desconto: 15 },
];

const esperado = [
  { nome: "Notebook", precoFinal: 4500.00, economizou: 500.00, etiqueta: "Notebook — R$ 4500.00 (Economize 10%)" },
  { nome: "Mouse",    precoFinal: 80.00,   economizou: 0.00,   etiqueta: "Mouse — R$ 80.00 (Sem desconto)" },
  { nome: "Teclado",  precoFinal: 150.00,  economizou: 50.00,  etiqueta: "Teclado — R$ 150.00 (Economize 25%)" },
  { nome: "Monitor",  precoFinal: 1530.00, economizou: 270.00, etiqueta: "Monitor — R$ 1530.00 (Economize 15%)" },
];

const testes = [
  {
    descricao: "array vazio retorna array vazio",
    resultado: () => transformarProdutos([]),
    checar: (r) => JSON.stringify(r) === JSON.stringify([]),
  },
  {
    descricao: "produto sem desconto",
    resultado: () => transformarProdutos([produtos[1]]),
    checar: (r) => JSON.stringify(r) === JSON.stringify([esperado[1]]),
  },
  {
    descricao: "produto com desconto",
    resultado: () => transformarProdutos([produtos[0]]),
    checar: (r) => JSON.stringify(r) === JSON.stringify([esperado[0]]),
  },
  {
    descricao: "lista completa de produtos",
    resultado: () => transformarProdutos(produtos),
    checar: (r) => JSON.stringify(r) === JSON.stringify(esperado),
  },
  {
    descricao: "array original não foi modificado",
    resultado: () => { transformarProdutos(produtos); return produtos[0]; },
    checar: (r) => r.precoFinal === undefined,
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
