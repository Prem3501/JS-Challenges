function passwordValidation(str) {
  if (str.length < 8) {
    return false;
  }
  let a = true;
  a = str
    .split('')
    .some((val) => val.charCodeAt(0) >= 65 && val.charCodeAt(0) <= 90);
  a = str
    .split('')
    .some((val) => val == val.toLowerCase() && val != val.toUpperCase());
  a = str
    .split('')
    .some((val) => val.charCodeAt(0) >= 48 && val.charCodeAt(0) <= 57);
  return a;
}
console.log(passwordValidation('Abcd;saklfjo;aif'));
