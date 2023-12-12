function capitalize(a) {
  // let c = '';
  // for (let i = 0; i < a.length; i++) {
  //   if (i == 0) {
  //     a = a[i].toUpperCase() + a.slice(i + 1, a.length);
  //   } else if (c == ' ') {
  //     a = a.slice(0, i) + a[i].toUpperCase() + a.slice(i + 1, a.length);
  //   } else {
  //     a = a.slice(0, i) + a[i].toLowerCase() + a.slice(i + 1, a.length);
  //   }
  //   c = a[i];
  // }
  let arr = a.toLowerCase().split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join(' ');
}
console.log(capitalize('river waTer land SeA'));
