// ================================================================
// DESAFIO MAP-03 — Iniciais em Maiúsculo  [FÁCIL]
// ================================================================
//
// Dado um array de strings, retorne um NOVO array onde a primeira
// letra de cada string está em maiúsculo e o restante em minúsculo.
//
// Regras:
//  - Use obrigatoriamente o método .map()
//  - A primeira letra deve ser maiúscula
//  - O restante da string deve ser minúsculo
//  - Strings vazias devem retornar strings vazias
//  - Não modifique o array original
//
// Exemplos:
//   capitalizarPalavras(["olá", "mundo"])       => ["Olá", "Mundo"]
//   capitalizarPalavras(["JAVASCRIPT"])          => ["Javascript"]
//   capitalizarPalavras([""])                    => [""]
//   capitalizarPalavras(["joÃO", "mARIA"])       => ["João", "Maria"]
//
// ================================================================

function capitalizarPalavras(arr) {
  // Escreva sua solução aqui
}

// ================================================================
// TESTES — execute o arquivo para ver os resultados
// ================================================================

const testes = [
  { entrada: ["olá", "mundo"],         esperado: ["Olá", "Mundo"],       descricao: "palavras minúsculas" },
  { entrada: ["JAVASCRIPT"],           esperado: ["Javascript"],          descricao: "palavra toda maiúscula" },
  { entrada: [""],                     esperado: [""],                    descricao: "string vazia" },
  { entrada: ["joÃO", "mARIA"],        esperado: ["João", "Maria"],       descricao: "mistura de cases" },
  { entrada: ["a", "b", "c"],          esperado: ["A", "B", "C"],         descricao: "letras únicas" },
  { entrada: [],                       esperado: [],                      descricao: "array vazio" },
  { entrada: ["node", "react", "vue"], esperado: ["Node", "React", "Vue"],descricao: "tecnologias" },
];

let passou = 0;
testes.forEach(({ entrada, esperado, descricao }) => {
  const resultado = capitalizarPalavras(entrada);
  const ok = JSON.stringify(resultado) === JSON.stringify(esperado);
  console.log(`${ok ? "✓" : "✗"} [${descricao}]`);
  if (!ok) console.log(`   Esperado: ${JSON.stringify(esperado)}\n   Recebido: ${JSON.stringify(resultado)}`);
  if (ok) passou++;
});
console.log(`\n${passou}/${testes.length} testes passaram.`);
