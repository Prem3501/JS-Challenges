function phoneNumberDirectory(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let [name, phno] = arr[i].split(':');
    map.set(name, phno);
  }
  return map;
}
console.log(
  phoneNumberDirectory(['prem:12345', 'vikk:123-3244', 'subhs:234-543-233'])
);
