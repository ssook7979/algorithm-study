function recursive(finder, text, start) {
  let latestIdx = -1, result = "";
  for (let i = start; i < text.length; i++) {
    const c = text[i];
    if (finder[c] > latestIdx ) {
      result += c;
    }
  }
  return result;
}

var longestCommonSubsequence1 = function(text1, text2) {
  const longer = text1.length > text2.length? text1 : text2;
  const shorter = text1 === longer? text2 : text1;
  const finder = {};
  let answer = "";

  for (let i = 0; i < longer.length; i++) {
    finder[longer[i]] = i;
  }

  for (let i = 0; i < shorter.length; i++) {
    const tmp = recursive(finder, shorter, i);
    if (tmp.length > answer.length) {
      answer = tmp;
    }
  }
  return answer.length;
};

var longestCommonSubsequence = function(text1, text2) {
  const dp = new Array(text1.length).fill(null).map(() => new Array(text2.length).fill(0));
  let i = 0, j = 0;
  function getDpValue(i, j, defaultValue=0) {
    if (i >= 0 && i < text1.length && j >= 0 && j < text2.length) {
      return dp[i][j];
    }
    return defaultValue;
  }

  while(i < text1.length && j < text2.length) {
    if (text1[i] === text2[j]) {
      dp[i][j] = getDpValue(i - 1, j - 1) + 1;
    } else {
      dp[i][j] = Math.max(getDpValue(i - 1, j), getDpValue(i, j - 1));
    }

    if (j === text2.length - 1) {
      i++;
      j = 0;
    } else {
      j++;
    }
  }
  
  return dp[text1.length - 1][text2.length - 1]
}

console.log(longestCommonSubsequence("abc", "ace"))