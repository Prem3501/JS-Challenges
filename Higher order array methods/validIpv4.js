function validIpv4(str) {
  const arr = str.split('.');
  return arr.length == 4 ? arr.every((ar) => ar > 0 && ar < 255) : false;
}
console.log(validIpv4('1.490.3.4'));
