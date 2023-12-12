function highestScoringWord(str) {
  const arr = str.split(' ');
  const res = arr.map((s) => {
    let sum = 0;
    for (let i of s.split('')) {
      sum += i.charCodeAt(0) - 96;
    }
    return sum;
  });
  const max = Math.max(...res);
  const ans = res.indexOf(max);
  return arr[ans];
}
console.log(highestScoringWord('take semynak me to '));
