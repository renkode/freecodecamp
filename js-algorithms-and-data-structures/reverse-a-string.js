function reverseString(str) {
  let temp = [];
  for (let i = str.length - 1; i >= 0; i--) {
    temp.push(str[i]);
  }
  return temp.join('');
}

console.log(reverseString("hello"));