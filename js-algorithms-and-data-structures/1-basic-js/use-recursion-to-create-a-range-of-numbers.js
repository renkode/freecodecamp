function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum]; 
  } else {
    const rangeArr = rangeOfNumbers(startNum + 1, endNum)
    rangeArr.unshift(startNum);
    return rangeArr;
  }
};

console.log(rangeOfNumbers(1,10))