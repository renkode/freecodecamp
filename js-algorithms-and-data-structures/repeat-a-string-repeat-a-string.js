function repeatStringNumTimes(str, num) {
  let temp = str;
  if (num <= 0) return "";
  while (num - 1 > 0) {
    str += temp;
    num--;
  }
  return str;
}

repeatStringNumTimes("abc", 3);