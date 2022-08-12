//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
//chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
//chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].

//so it's like using % kinda
//slice every n
//for loop?
function chunkArrayInGroups(arr, size) {
  let temp = [];
  for (let i = 0; i < arr.length; i+=size) {
    temp.push(arr.slice(i,i+size));
  }
  return temp;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));