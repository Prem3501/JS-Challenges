function validateEmail(a) {
  if (a.indexOf('@') == -1) {
    return false;
  }
  const [localpart, domainPart] = a.split('@');
  if (localpart.length == 0 || domainPart.length < 3) {
    return false;
  }
  const domainExtension = domainPart.split('.');
  if (domainExtension.length < 2 || domainExtension[1].length < 2) {
    return false;
  }

  return true;
}
console.log(validateEmail('caprem3501.gmail.com'));
