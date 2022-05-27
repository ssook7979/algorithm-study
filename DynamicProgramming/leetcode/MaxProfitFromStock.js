var maxProfit = function(prices) {
  let maxProfit = 0, start = 0, end = 1;
  while (end < prices.length) {
    if (prices[end] > prices[start]) {
      maxProfit = Math.max(prices[end] - prices[start], maxProfit);
      end++;
    } else {
      start = end;
      end = start + 1;
    }
  }

  return maxProfit;
}

console.log(maxProfit([7,6,4,3,1]))