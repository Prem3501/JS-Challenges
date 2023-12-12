function countVowels(a) {
  let b = 'aeiouAEIOU';
  let c = 0;
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      c++;
    }
  }
  return c;
}
console.log(countVowels('aaaioonuuud ioijou njiiou'));
