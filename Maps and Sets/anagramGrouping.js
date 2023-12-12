function anagramGrouping(arr) {
  let map = new Map();
  for (let word of arr) {
    let sort = word.split('').sort().join('');
    if (map.has(sort)) {
      map.get(sort).push(word);
    } else {
      map.set(sort, [word]);
    }
  }
  return Array.from(map.values());
}
console.log(anagramGrouping(['listen', 'silent', 'dog', 'god']));
