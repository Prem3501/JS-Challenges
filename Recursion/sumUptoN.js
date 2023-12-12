function sumUptoN(n) {
  if (n == 1) {
    return 1;
  }
  return n + sumUptoN(n - 1);
}
console.log(sumUptoN(5));
