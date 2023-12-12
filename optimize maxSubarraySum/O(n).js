function slidingWindow(arr, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  let max = sum;
  for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i - k] + arr[i];
    max = Math.max(max, sum);
  }
  return max;
}
console.log(slidingWindow([2, 5, 3, 1, 11, 7, 6, 4], 3));
