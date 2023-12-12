// function fibonacci(n) {
//   if (n == 1) {
//     return 1;
//   }
//   if (n == 0) {
//     return 0;
//   }
//   console.log(n);
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
const fibonacci = (n) => (n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(4));
