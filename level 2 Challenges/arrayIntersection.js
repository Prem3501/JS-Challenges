function arrayIntersection(a, b) {
  // const intersect = [];
  // for (let i = 0; i < a.length; i++) {
  //   if (b.includes(a[i])) intersect.push(a[i]);
  // }
  // return intersect;
  const set = new Set(a);
  const arr = [];
  for (let i = 0; i < b.length; i++) {
    if (set.has(b[i])) {
      arr.push(b[i]);
    }
  }
  return arr;
}
const a = [1, 2, 3, 5, 6];
const b = [2, 5, 6, 7, 8, 9, 10];
if (a.length > b.length) console.log(arrayIntersection(a, b));
else {
  console.log(arrayIntersection(b, a));
}
