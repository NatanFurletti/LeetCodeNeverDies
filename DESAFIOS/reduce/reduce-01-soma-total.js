// ================================================================
// DESAFIO REDUCE-01 — Soma Total  [FÁCIL]
// ================================================================
//
// Dado um array de números, retorne a soma de todos os elementos.
//
// Regras:
//  - Use obrigatoriamente o método .reduce()
//  - Array vazio deve retornar 0
//  - Funciona com números negativos e decimais
//
// Exemplos:
//   somarTudo([1, 2, 3, 4, 5])     => 15
//   somarTudo([10, -3, 7])         => 14
//   somarTudo([])                  => 0
//   somarTudo([0.1, 0.2, 0.7])     => 1
//
// ================================================================

function somarTudo(arr) {
  // Escreva sua solução aqui
}

// ================================================================
// TESTES — execute o arquivo para ver os resultados
// ================================================================

const testes = [
  { entrada: [1, 2, 3, 4, 5],   esperado: 15,   descricao: "sequência simples" },
  { entrada: [10, -3, 7],        esperado: 14,   descricao: "números negativos" },
  { entrada: [],                 esperado: 0,    descricao: "array vazio" },
  { entrada: [0],                esperado: 0,    descricao: "apenas zero" },
  { entrada: [-1, -2, -3],       esperado: -6,   descricao: "todos negativos" },
  { entrada: [100],              esperado: 100,  descricao: "único elemento" },
  { entrada: [0.1, 0.2, 0.7],   esperado: 1,    descricao: "decimais" },
];

let passou = 0;
testes.forEach(({ entrada, esperado, descricao }) => {
  const resultado = somarTudo(entrada);
  const ok = Math.abs(resultado - esperado) < 0.0001;
  console.log(`${ok ? "✓" : "✗"} [${descricao}]`);
  if (!ok) console.log(`   Esperado: ${esperado}\n   Recebido: ${resultado}`);
  if (ok) passou++;
});
console.log(`\n${passou}/${testes.length} testes passaram.`);
