function phnoFormat(a) {
  return (
    '(' +
    a[0] +
    a[1] +
    a[2] +
    ') ' +
    a[3] +
    a[4] +
    a[5] +
    '-' +
    a[6] +
    a[7] +
    a[8] +
    a[9]
  );
}
console.log(phnoFormat([3, 4, 5, 5, 5, 5, 9, 0, 9, 0]));
