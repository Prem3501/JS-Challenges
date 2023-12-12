function hashtagGenerator(str) {
  let a = str
    .split(' ')
    .reduce(
      (acc, word) =>
        acc + (word.substring(0, 1).toUpperCase() + word.substring(1)),
      '#'
    );
  // a = '#' + a;
  return a.length < 140 ? a : false;
}
console.log(
  hashtagGenerator(
    `   javascript is                 beautiful iodsnf oias fd;oia ;ofnoasd ;cssldnf `
  )
);
