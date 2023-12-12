function maxSubarraySum(arr, k) {
  let max = -Infinity;
  for (let i = 0; i < arr.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    max = Math.max(sum, max);
  }
  return max;
}
console.log(maxSubarraySum([2, 5, 3, 1, 11, 7, 6, 4], 3));
