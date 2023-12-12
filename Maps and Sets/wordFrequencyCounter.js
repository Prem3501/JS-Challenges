function wordFrequencyCounter(str) {
  str = str.toLowerCase();
  let arr = str.split(/\W+/);
  const map = arr.reduce(
    (acc, num) => acc.set(num, (acc.get(num) || 0) + 1),
    new Map()
  );
  return map;
}
console.log(
  wordFrequencyCounter('The quick brown fox jumps over the lazy dog')
);
