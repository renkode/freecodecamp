function titleCase(str) {
  let temp = str.split(' ');
  temp = temp.map(ele => ele[0].toUpperCase() + ele.slice(1).toLowerCase());
  return temp.join(' ');
}

console.log(titleCase("I'm a little tea pot"));