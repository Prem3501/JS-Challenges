const Stack = require('./stack');
function balancedParanthesis(str) {
  let stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(') {
      stack.push();
    } else {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.isEmpty();
}
console.log(balancedParanthesis('()())'));
