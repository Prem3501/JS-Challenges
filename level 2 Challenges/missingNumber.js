function missingNumber(arr) {
  const expectedSum = ((arr.length + 1) * (arr.length + 2)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  return expectedSum - actualSum;
}
console.log(missingNumber([1, 2, 3, 4, 5, 6, 8, 7, 9]));
