// Bottom Up Dynamic Programming
function knapsack(weights, profits, capacity) {
  const dp = Array(profits.length)
            .fill(0)
            .map(() => Array(capacity + 1).fill(0));

  for (let i = 0; i < weights.length; i++) {
    dp[i][0] = 0;
  }

  for (let c = 0; c <= capacity; c++) {
    dp[0][c] = 0;
  }

  for (let index = 0; index < weights.length; index++) {
    for (let currentWeight = 0; currentWeight <= capacity; currentWeight++) {
      if (currentWeight > weights[i]){
        dp[index][currentWeight] =
          Math.max(dp[index-1][currentWeight], profits[index] + dp[index-1][currentWeight - weights[index]]);
      } else {
        dp[index][currentWeight] = dp[index-1][currentWeight];
      }
    }
  }

  return dp[profits.length - 1][capacity];
}


// Top Down Dynamic Programming
mem = [];
function knapsack(weights, profits, capacity, index) {
  if (capacity <= 0 || index >= weights.length) {
    return 0;
  }

  if (mem[capacity][index]) {
    return mem[capacity][index];
  }

  let including, excluding;
  if (capacity >= weights[index]) {
    including = profits[index] + knapsack(weights, profits, capacity - weights[index], index + 1);
  }
  excluding = knapsack(weights, profits, capacity, index + 1);

  mem[capacity][index] = Math.max(including, excluding);
  return mem[capacity][index];
}

// Recursive without any optimization
function knapsack(weights, profits, capacity, index) {
  if (capacity <= 0 || index >= weights.length) {
    return 0;
  }

  let including, excluding;
  if (capacity >= weights[index]) {
    including = profits[index] + knapsack(weights, profits, capacity - weights[index], index + 1);
  }
  excluding = knapsack(weights, profits, capacity, index + 1);

  return Math.max(including, excluding);
}
