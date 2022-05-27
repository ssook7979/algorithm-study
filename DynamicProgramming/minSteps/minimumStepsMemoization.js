function minCostClimbingStairs(cost) {
  const n = cost.length;
  const dp = [];
  return Math.min(minCost(n - 1, cost), minCost(n - 2, cost), dp);
}

function minCost(i, cost, dp) {
  if (i < 0) return 0;
  if (i === 0 || i === 1) return cost[i];
  dp[i] = cost[i] + Math.min(minCost(i - 1, cost), minCost(i - 2, cost));
  return dp[i];
}