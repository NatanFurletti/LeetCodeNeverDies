// ================================================================
// DESAFIO MAP-01 — Dobrar os Números  [FÁCIL]
// ================================================================
//
// Dado um array de números, retorne um NOVO array onde cada número
// foi multiplicado por 2.
//
// Regras:
//  - Use obrigatoriamente o método .map()
//  - Não modifique o array original
//  - Números negativos devem ser mantidos como negativos
//
// Exemplos:
//   dobrarNumeros([1, 2, 3])        => [2, 4, 6]
//   dobrarNumeros([0, -1, 5])       => [0, -2, 10]
//   dobrarNumeros([10, 100, 1000])  => [20, 200, 2000]
//
// ================================================================

function dobrarNumeros(arr) {
  // Escreva sua solução aqui
}

// ================================================================
// TESTES — execute o arquivo para ver os resultados
// ================================================================

const testes = [
  { entrada: [1, 2, 3],          esperado: [2, 4, 6],          descricao: "números positivos simples" },
  { entrada: [0, -1, 5],         esperado: [0, -2, 10],        descricao: "zero e negativos" },
  { entrada: [10, 100, 1000],    esperado: [20, 200, 2000],    descricao: "múltiplos de 10" },
  { entrada: [],                 esperado: [],                  descricao: "array vazio" },
  { entrada: [-3, -7, -2],       esperado: [-6, -14, -4],      descricao: "todos negativos" },
  { entrada: [0.5, 1.5, 2.5],   esperado: [1, 3, 5],          descricao: "decimais" },
];

let passou = 0;
testes.forEach(({ entrada, esperado, descricao }) => {
  const resultado = dobrarNumeros(entrada);
  const ok = JSON.stringify(resultado) === JSON.stringify(esperado);
  console.log(`${ok ? "✓" : "✗"} [${descricao}]`);
  if (!ok) console.log(`   Esperado: ${JSON.stringify(esperado)}\n   Recebido: ${JSON.stringify(resultado)}`);
  if (ok) passou++;
});
console.log(`\n${passou}/${testes.length} testes passaram.`);
