// ================================================================
// DESAFIO REDUCE-03 — Aplainar Array  [FÁCIL]
// ================================================================
//
// Dado um array que contém outros arrays dentro dele (aninhamento
// de apenas 1 nível), retorne um NOVO array com todos os elementos
// em um único nível.
//
// Regras:
//  - Use obrigatoriamente o método .reduce()
//  - Apenas um nível de aninhamento (não precisa ser recursivo)
//  - Preserva a ordem dos elementos
//  - Não use flat() ou flatMap() — a ideia é entender como funciona!
//  - Não modifique os arrays originais
//
// Exemplos:
//   aplainar([[1, 2], [3, 4], [5]])        => [1, 2, 3, 4, 5]
//   aplainar([["a", "b"], ["c"]])          => ["a", "b", "c"]
//   aplainar([[1], [], [2, 3]])            => [1, 2, 3]
//   aplainar([])                           => []
//
// ================================================================

function aplainar(arr) {
  // Escreva sua solução aqui
}

// ================================================================
// TESTES — execute o arquivo para ver os resultados
// ================================================================

const testes = [
  {
    entrada: [[1, 2], [3, 4], [5]],
    esperado: [1, 2, 3, 4, 5],
    descricao: "números em três grupos",
  },
  {
    entrada: [["a", "b"], ["c"]],
    esperado: ["a", "b", "c"],
    descricao: "strings",
  },
  {
    entrada: [[1], [], [2, 3]],
    esperado: [1, 2, 3],
    descricao: "sub-array vazio no meio",
  },
  {
    entrada: [],
    esperado: [],
    descricao: "array vazio",
  },
  {
    entrada: [[1, 2, 3, 4, 5]],
    esperado: [1, 2, 3, 4, 5],
    descricao: "único sub-array",
  },
  {
    entrada: [[1], [2], [3], [4]],
    esperado: [1, 2, 3, 4],
    descricao: "cada sub-array com um elemento",
  },
  {
    entrada: [["x", "y"], [1, 2], [true]],
    esperado: ["x", "y", 1, 2, true],
    descricao: "tipos misturados",
  },
];

let passou = 0;
testes.forEach(({ entrada, esperado, descricao }) => {
  const resultado = aplainar(entrada);
  const ok = JSON.stringify(resultado) === JSON.stringify(esperado);
  console.log(`${ok ? "✓" : "✗"} [${descricao}]`);
  if (!ok) console.log(`   Esperado: ${JSON.stringify(esperado)}\n   Recebido: ${JSON.stringify(resultado)}`);
  if (ok) passou++;
});
console.log(`\n${passou}/${testes.length} testes passaram.`);
