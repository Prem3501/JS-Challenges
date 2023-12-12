function numberRange(startNum, endNum) {
  if (startNum == endNum) {
    return [startNum];
  }
  const num = numberRange(startNum, endNum - 1);
  num.push(endNum);
  return num;
}
console.log(numberRange(1, 10));
