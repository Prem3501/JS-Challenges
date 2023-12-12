const Stack = require('./stack');
function reverseString(str) {
  let stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let a = '';
  while (!stack.isEmpty()) {
    a += stack.pop();
  }
  return a;
}
console.log(reverseString('Hello'));
