// ================================================================
// DESAFIO MAP-02 — Celsius para Fahrenheit  [FÁCIL]
// ================================================================
//
// Dada uma lista de temperaturas em Celsius, retorne um NOVO array
// com cada temperatura convertida para Fahrenheit.
//
// Fórmula: F = (C * 9/5) + 32
//
// Regras:
//  - Use obrigatoriamente o método .map()
//  - Arredonde cada resultado para 2 casas decimais
//  - Não modifique o array original
//
// Exemplos:
//   converterTemperaturas([0])        => [32]
//   converterTemperaturas([100])      => [212]
//   converterTemperaturas([0, 100])   => [32, 212]
//   converterTemperaturas([-40])      => [-40]   (ponto onde °C === °F)
//
// ================================================================

function converterTemperaturas(celsius) {
  // Escreva sua solução aqui
}

// ================================================================
// TESTES — execute o arquivo para ver os resultados
// ================================================================

const testes = [
  { entrada: [0],           esperado: [32],          descricao: "ponto de congelamento" },
  { entrada: [100],         esperado: [212],          descricao: "ponto de ebulição" },
  { entrada: [-40],         esperado: [-40],          descricao: "ponto de equivalência" },
  { entrada: [37],          esperado: [98.6],         descricao: "temperatura corporal" },
  { entrada: [0, 100, 37],  esperado: [32, 212, 98.6],descricao: "múltiplas temperaturas" },
  { entrada: [],            esperado: [],              descricao: "array vazio" },
  { entrada: [-10, 25],     esperado: [14, 77],        descricao: "negativo e positivo" },
];

let passou = 0;
testes.forEach(({ entrada, esperado, descricao }) => {
  const resultado = converterTemperaturas(entrada);
  const ok = JSON.stringify(resultado) === JSON.stringify(esperado);
  console.log(`${ok ? "✓" : "✗"} [${descricao}]`);
  if (!ok) console.log(`   Esperado: ${JSON.stringify(esperado)}\n   Recebido: ${JSON.stringify(resultado)}`);
  if (ok) passou++;
});
console.log(`\n${passou}/${testes.length} testes passaram.`);
