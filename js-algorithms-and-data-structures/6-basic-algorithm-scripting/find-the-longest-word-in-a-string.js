function findLongestWordLength(str) {
  const words = str.split(' ');
  //console.log(words);
  let max = 0;
  words.forEach(word => {
    if (word.length > max) max = word.length;
  });
  return max;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));