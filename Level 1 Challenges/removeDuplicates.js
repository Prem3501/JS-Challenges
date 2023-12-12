function removeDuplicates(a) {
  // const b = new Set(a);
  // return Array.from(b);
  const unique = [];
  for (let i = 0; i < a.length; i++) {
    if (!unique.includes(a[i])) {
      unique.push(a[i]);
    }
  }
  return unique;
}
console.log(removeDuplicates([1, 23, 1, 2, 3, 23, 'hello', 'hello']));
