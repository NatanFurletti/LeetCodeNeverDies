// ================================================================
// DESAFIO MAP-05 — Decodificar Mensagens  [DIFÍCIL]
// ================================================================
//
// Você recebe um array de objetos de mensagem codificada.
// Cada objeto tem: { mensagem, chave }
//   - mensagem: string onde cada letra foi deslocada N posições no
//               alfabeto (cifra de César)
//   - chave: número inteiro com o valor do deslocamento usado
//
// Cada mensagem foi codificada assim: cada letra foi avançada `chave`
// posições no alfabeto circular (Z + 1 volta para A).
// Letras maiúsculas mantêm maiúsculas, minúsculas mantêm minúsculas.
// Caracteres não-alfabéticos (espaços, pontuação) permanecem iguais.
//
// Retorne um NOVO array de objetos onde cada objeto tem:
//   - original: string (mensagem codificada — mantém a mesma)
//   - decodificada: string (mensagem decodificada)
//   - palavras: number (quantidade de palavras na mensagem decodificada)
//   - chave: number (mantém a mesma)
//
// Regras:
//  - Use obrigatoriamente .map() para transformar o array
//  - Crie uma função auxiliar decodificarCesar(texto, chave) para ajudar
//  - Não modifique o array original
//
// Exemplos:
//   chave=3: "D" foi codificado de "A" (A+3=D), então para decodificar: D-3=A
//   chave=1: "Ifmmp" => "Hello" (cada letra foi avançada 1, entao recua 1)
//
//   entrada: [{ mensagem: "Khoor Zruog", chave: 3 }]
//   saída:   [{ original: "Khoor Zruog", decodificada: "Hello World",
//               palavras: 2, chave: 3 }]
//
//   entrada: [{ mensagem: "Bzdrzn", chave: 25 }]
//   saída:   [{ original: "Bzdrzn", decodificada: "Caesar", palavras: 1, chave: 25 }]
//
// Dica: para decodificar, basta deslocar cada letra para TRÁS `chave` posições.
//       Use o código ASCII: "A"=65, "Z"=90, "a"=97, "z"=122
//       Para manter circular: ((charCode - base - chave + 26) % 26) + base
//
// ================================================================

function decodificarCesar(texto, chave) {
  // Função auxiliar — implemente aqui a lógica da cifra de César
}

function decodificarMensagens(mensagens) {
  // Escreva sua solução aqui usando .map()
}

// ================================================================
// TESTES — execute o arquivo para ver os resultados
// ================================================================

const testes = [
  {
    entrada: [{ mensagem: "Khoor Zruog", chave: 3 }],
    esperado: [{ original: "Khoor Zruog", decodificada: "Hello World", palavras: 2, chave: 3 }],
    descricao: "Hello World com chave 3",
  },
  {
    entrada: [{ mensagem: "Bzdrzn", chave: 25 }],
    esperado: [{ original: "Bzdrzn", decodificada: "Caesar", palavras: 1, chave: 25 }],
    descricao: "Caesar com chave 25",
  },
  {
    entrada: [{ mensagem: "Uryyb, Jbeyq!", chave: 13 }],
    esperado: [{ original: "Uryyb, Jbeyq!", decodificada: "Hello, World!", palavras: 2, chave: 13 }],
    descricao: "ROT13 com pontuação",
  },
  {
    entrada: [{ mensagem: "ABC", chave: 1 }],
    esperado: [{ original: "ABC", decodificada: "ZAB", palavras: 1, chave: 1 }],
    descricao: "wrap around: A volta para Z",
  },
  {
    entrada: [
      { mensagem: "Khoor", chave: 3 },
      { mensagem: "Uryyb", chave: 13 },
    ],
    esperado: [
      { original: "Khoor", decodificada: "Hello", palavras: 1, chave: 3 },
      { original: "Uryyb", decodificada: "Hello", palavras: 1, chave: 13 },
    ],
    descricao: "múltiplas mensagens com chaves diferentes",
  },
  {
    entrada: [],
    esperado: [],
    descricao: "array vazio",
  },
];

let passou = 0;
testes.forEach(({ entrada, esperado, descricao }) => {
  const resultado = decodificarMensagens(entrada);
  const ok = JSON.stringify(resultado) === JSON.stringify(esperado);
  console.log(`${ok ? "✓" : "✗"} [${descricao}]`);
  if (!ok) console.log(`   Esperado: ${JSON.stringify(esperado)}\n   Recebido: ${JSON.stringify(resultado)}`);
  if (ok) passou++;
});
console.log(`\n${passou}/${testes.length} testes passaram.`);
