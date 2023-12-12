function findMissingLetter(arr) {
  let c = arr[0].charCodeAt(0);
  const a = arr
    .map((char) => char.charCodeAt(0))
    .find((num) => {
      if (num !== c++) {
        return true;
      }
    });
  return a ? String.fromCharCode(a - 1) : '';
}
console.log(findMissingLetter(['a', 'b', 'd']));
