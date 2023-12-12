function permutation(str) {
  let result = [];
  if (str.length == 0) {
    result.push('');
    return result;
  }
  for (let i = 0; i < str.length; i++) {
    let a = str[i];
    let b = str.slice(0, i) + str.slice(i + 1);
    let sub = permutation(b);
    for (let j = 0; j < sub.length; j++) {
      result.push(a + sub[j]);
    }
  }
  return result;
}
console.log(permutation('abc'));
