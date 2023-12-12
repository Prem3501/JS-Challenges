function fizzBuzz(a) {
  let i = a;
  const arr = [];
  b = 1;
  while (i-- != 0) {
    if (b % 15 == 0) {
      arr.push('fizzbuzz');
    } else if (b % 3 == 0) {
      arr.push('fizz');
    } else if (b % 5 == 0) {
      arr.push('buzz');
    } else arr.push(b);
    b++;
  }

  return arr;
}
console.log(fizzBuzz(15));
