// ================================================================
// DESAFIO REDUCE-02 — Contar Ocorrências  [FÁCIL]
// ================================================================
//
// Dado um array de strings, retorne um OBJETO onde cada chave é
// uma string do array e o valor é a quantidade de vezes que ela aparece.
//
// Regras:
//  - Use obrigatoriamente o método .reduce()
//  - A contagem é sensível a maiúsculas/minúsculas ("A" ≠ "a")
//  - Array vazio deve retornar {}
//  - Não modifique o array original
//
// Exemplos:
//   contarOcorrencias(["a", "b", "a", "c", "b", "a"])
//     => { a: 3, b: 2, c: 1 }
//
//   contarOcorrencias(["banana", "maçã", "banana"])
//     => { banana: 2, "maçã": 1 }
//
//   contarOcorrencias([])
//     => {}
//
// ================================================================

function contarOcorrencias(arr) {
  // Escreva sua solução aqui
}

// ================================================================
// TESTES — execute o arquivo para ver os resultados
// ================================================================

const testes = [
  {
    entrada: ["a", "b", "a", "c", "b", "a"],
    esperado: { a: 3, b: 2, c: 1 },
    descricao: "letras repetidas",
  },
  {
    entrada: ["banana", "maçã", "banana"],
    esperado: { banana: 2, "maçã": 1 },
    descricao: "palavras repetidas",
  },
  {
    entrada: [],
    esperado: {},
    descricao: "array vazio",
  },
  {
    entrada: ["único"],
    esperado: { único: 1 },
    descricao: "um único elemento",
  },
  {
    entrada: ["A", "a", "A"],
    esperado: { A: 2, a: 1 },
    descricao: "sensível a maiúsculas",
  },
  {
    entrada: ["x", "x", "x", "x"],
    esperado: { x: 4 },
    descricao: "todos iguais",
  },
];

let passou = 0;
testes.forEach(({ entrada, esperado, descricao }) => {
  const resultado = contarOcorrencias(entrada);
  const ok = JSON.stringify(resultado) === JSON.stringify(esperado);
  console.log(`${ok ? "✓" : "✗"} [${descricao}]`);
  if (!ok) console.log(`   Esperado: ${JSON.stringify(esperado)}\n   Recebido: ${JSON.stringify(resultado)}`);
  if (ok) passou++;
});
console.log(`\n${passou}/${testes.length} testes passaram.`);
