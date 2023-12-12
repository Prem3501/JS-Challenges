function pallindrome(b) {
  removeAlphaNumericCharacters(b);
  return b.split(' ').reverse().join(' ') === b;
}
function removeAlphaNumericCharacters(a) {
  str = '';
  for (let i = 0; i < a.length; i++) {
    if (!isAlphaNumericCharacter(a[i])) {
      str += a[i];
    }
  }
  return str;
}
function isAlphaNumericCharacter(a) {
  const b = a.charCodeAt(0);
  return !(b >= 48 && b <= 57) || (b >= 97 && b <= 122);
}
console.log(pallindrome('m((()))****adam++++----'));
