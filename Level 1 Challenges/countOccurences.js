// function countOccurences(a, b) {
//   let count = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] == b) {
//       count++;
//     }
//   }
//   return count;
// }
function countOccurences(a, b) {
  return a.split(b).length - 1;
}
console.log(countOccurences('aaaa', 'a'));
