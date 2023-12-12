// function missingLetter(a) {
//   const b = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let c = b.indexOf(a[0]);
//   for (let i = 0; i < a.length; i++) {
//     if (b[c] != a[c+i]) {
//       return b[c];
//     }

//   }
//   return b[c];
// }
function missingLetter(a) {
  let c = a[0].charCodeAt(0);
  for (let i = 0; i < a.length; i++) {
    if (String.fromCharCode(c) != a[i]) {
      return String.fromCharCode(c);
    }
    c++;
  }
}
console.log(missingLetter(['a', 'b', 'c', 'e']));
