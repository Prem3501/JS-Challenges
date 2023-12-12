function areAllUnique(a) {
  // let arr = [];
  // for (let i = 0; i < a.length; i++) {
  //   if (!arr.includes(a[i])) {
  //     arr.push(a[i]);
  //   } else {
  //     return false;
  //   }
  // }
  // return true;
  let arr = {};
  for (let i = 0; i < a.length; i++) {
    if (arr[a[i]]) {
      return false;
    }
    arr[a[i]] = true;
  }
  return true;
}
console.log(areAllUnique('abcdef'));
