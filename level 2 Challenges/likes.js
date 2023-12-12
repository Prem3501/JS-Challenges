function likes(arr) {
  if (arr.length == 0) {
    console.log('No one likes this');
  } else if (arr.length == 1) {
    console.log(`${arr[0]} likes this`);
  } else if (arr.length == 2) {
    console.log(`${arr[0]} and ${arr[1]} likes this`);
  } else if (arr.length == 3) {
    console.log(`${arr[0]},${arr[1]} and ${arr[2]} likes this`);
  } else {
    console.log(`${arr[0]}, ${arr[1]} and ${arr.length - 2} others likes this`);
  }
}
likes(['hi', 'hello', 'vanakkam', 'welcome']);
