# 10 07 2022

Dynamic Programming: Knapsack Problem

Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack. In other words, given two integer arrays val[0..n-1] and wt[0..n-1] which represent values and weights associated with n items respectively. Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[] such that sum of the weights of this subset is smaller than or equal to W. You cannot break an item, either pick the complete item or don’t pick it (0-1 property).

// [{val: 1, weight: 10}, { val: 25, weight: 5 }];
maxJoy([1, 25], [10, 5], 10) => 25
maxJoy([60, 100, 120], [10, 20, 30], 50) => 220