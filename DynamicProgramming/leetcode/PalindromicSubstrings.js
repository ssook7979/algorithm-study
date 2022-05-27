function isPalindromic(s, palindroms) {
  if (palindroms.has(s)) return true;
  let i = 0, j = s.length - 1;
  while (j >= i && s[i] === s[j]) {
    if (palindroms[s.slice(i + 1, j)]) return true;
    i++;
    j--;
  }
  return false;
}
var countSubstrings = function(s) {
  var dpTF = new Array(s.length).fill(null).map(() => new Array(s.length).fill(null));
  var dpCount = new Array(s.length).fill(null).map(() => new Array(s.length).fill(null));
  const result = s.split("");

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      result.push(s.slice(i, i + 2))
    }
  }

  function countDp(i, j) {
    if (s[i] === s[j]) {
      if ((i === j || j-i === 1)) {
        dpCount[i][j] = 1;
        dpTF[i][j] = true;
      } else if (dpTF(i + 1, j - 1)) {
        dpTF[i][j] = true
      }
    }
    if (dpTF[i][j]) {
      dpCount[i][j] = countDp(i+1, j) + countDp(i, j-1) + 1 - countDp(i+1, j-1);
    }
    return dpCount[i][j]
  }

  return result;
};

console.log(countSubstrings("aaaa"))