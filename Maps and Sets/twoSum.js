function twoSum(arr, tar) {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    let rem = tar - arr[i];
    if (set.has(rem)) {
      return [arr.indexOf(rem), i];
    }

    set.add(arr[i]);
  }
}
console.log(twoSum([1, 2, 3, 4, 5], 6));
