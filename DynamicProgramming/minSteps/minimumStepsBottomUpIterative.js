function minCostClimbingStairs(cost) {
  const n = cost.length;
  if(n === 0) return 0;
  if(n === 1) return cost[0];
  const dp = [];
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      dp[i] = cost[i];
    } else {
      dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2])
    }
  }
  return Math.min(dp[n - 1], dp[n - 2]);
}