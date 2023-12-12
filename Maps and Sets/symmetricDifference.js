function symmetricDifference(arr) {
  let [arr1, arr2] = arr;
  let a = new Set(arr1);
  let b = new Set(arr2);
  let ar = [];
  for (let c of a) {
    if (!b.has(c)) {
      ar.push(c);
    }
  }
  for (let c of b) {
    if (!a.has(c)) {
      ar.push(c);
    }
  }
  return ar;
}
console.log(
  symmetricDifference([
    [1, 2, 3, 4],
    [1, 3, 5, 6],
  ])
);
