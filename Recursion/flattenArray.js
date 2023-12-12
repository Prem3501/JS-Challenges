function flattenArray(arr) {
  result = [];
  for (const a of arr) {
    if (Array.isArray(a)) {
      result = result.concat(flattenArray(a));
    } else {
      result.push(a);
    }
  }
  return result;
}
console.log(flattenArray([[1, 2, 3], [4, 5, [2, 3, 4]], [1]]));
