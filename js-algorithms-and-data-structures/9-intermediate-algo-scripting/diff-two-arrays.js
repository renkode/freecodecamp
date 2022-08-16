// list items that only exist in one array

function diffArray(arr1, arr2) {
  //const newArr = [];
  // let longerArr, shorterArr;
  // if (arr1.length > arr2.length) {
  //   longerArr = arr1;
  //   shorterArr = arr2;
  // } else {
  //   longerArr = arr2;
  //   shorterArr = arr1;
  // }
  // longerArr.forEach(el => {
  //   if (!shorterArr.includes(el)) newArr.push(el);
  // })
  // shorterArr.forEach(el => {
  //   if (!longerArr.includes(el)) newArr.push(el);
  // })

  const newArr = arr1.concat(arr2);
  let diffs = newArr.filter(el => !arr1.includes(el) || !arr2.includes(el))
  return diffs;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));