function sumOfSquares(arr) {
  const a = arr
    .filter((num) => num % 2 == 0)
    .map((num) => num * num)
    .reduce((num, sum) => sum + num, 0);
  return a;
}
console.log(sumOfSquares([1, 2, 3, 4, 5, 6]));
