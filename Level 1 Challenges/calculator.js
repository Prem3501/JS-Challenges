function calculator(a, b, c) {
  if (c === '+') {
    return a + b;
  } else if (c === '-') {
    return a - b;
  } else if (c === '*') {
    return a * b;
  } else if (c === '/') {
    return a / b;
  } else {
    throw new Error('invalid operator');
  }
}
console.log(calculator(10, 5, ';'));
