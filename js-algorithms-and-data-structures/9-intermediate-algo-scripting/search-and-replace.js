function myReplace(str, before, after) { // must preserve case
  let temp = str.split(" ");
  let index = temp.indexOf(before);
  if (temp[index][0] === temp[index][0].toUpperCase()) {
    temp[index] = after[0].toUpperCase() + after.slice(1);
  } else {
    temp[index] = after[0].toLowerCase() + after.slice(1);
  }
  return temp.join(" ");
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));