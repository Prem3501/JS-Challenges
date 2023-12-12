function longestConsecutiveSequence(arr) {
  let set = new Set(arr);
  let longest = 0;
  for (const s of set) {
    if (!set.has(s - 1)) {
      let consecutive = 1;
      let curr = s;
      while (set.has(curr + 1)) {
        curr++;
        consecutive++;
      }
      longest = Math.max(consecutive, longest);
    }
  }
  return longest;
}
console.log(longestConsecutiveSequence([100, 4, 200, 1, 2, 3]));
