function confirmEnding(str, target) {
  // loop through str backwards, up to target.length? nah
  // start loop from str.length - target.length and check ending === target? no need for loop actually
  const endingLength = str.length - target.length;
  const endingStr = str.slice(endingLength, str.length);
  return endingStr === target;
}

console.log(confirmEnding("Bastian", "n"));