var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  let menor = Infinity;

  for (let x = 0; x < strs.length - 1; x++) {
    let n = 0;
    while (
      n < strs[x].length &&
      n < strs[x + 1].length &&
      strs[x][n] === strs[x + 1][n]
    ) {
      n++;
    }
    menor = Math.min(menor, n);
    if (menor === 0) return "";
  }

  return strs[0].slice(0, menor);
};
