function validAnagram(a, b) {
  // let obj = {};
  // let obj1 = {};
  // let arr = a.split('');
  // let arr1 = b.split('');
  // arr.forEach((ar) => (obj[ar] = (obj[ar] || 0) + 1));
  // arr1.forEach((ar) => (obj1[ar] = (obj1[ar] || 0) + 1));
  // if (obj.length != obj1.length) {
  //   return false;
  // }
  // for (let i = 0; i < arr.length; i++) {
  //   if (obj[arr[i]] != obj1[arr[i]]) {
  //     return false;
  //   }
  // }
  // return true;
  const obj = a.split('').reduce((acc, arr) => {
    acc[arr] = (acc[arr] || 0) + 1;
    return acc;
  }, {});
  const obj1 = b.split('').reduce((acc, arr) => {
    acc[arr] = (acc[arr] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(obj).every((a) => obj[a] == obj1[a]);
}
console.log(validAnagram('astronomer', 'moonstarer'));
