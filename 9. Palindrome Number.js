/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  const y = x.toString();
  const reverse = [...y].reverse().join("");
  return y === reverse;
};
