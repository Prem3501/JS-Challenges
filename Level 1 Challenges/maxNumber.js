function maxNumber(arr) {
  let max = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (max < arr[i]) {
  //     max = arr[i];
  //   }
  // }
  max = Math.max(...arr);
  return max;
}
console.log(maxNumber([1, 2, 3, 4, 5]));
