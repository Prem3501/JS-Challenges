function findFirstUnique(a) {
  // const b = {};
  // for (let i = 0; i < a.length; i++) {
  //   b[a[i]] = (b[a[i]] || 0) + 1;
  // }
  const b = new Map();
  for (let i = 0; i < a.length; i++) {
    b.set(a[i], (b.get(a[i]) || 0) + 1);
  }
  for (let i = 0; i < a.length; i++) {
    if (b.get(a[i]) == 1) {
      return a[i];
    }
  }
}
console.log(findFirstUnique('aaaacccddddeee'));
