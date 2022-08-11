function truncateString(str, num) {
  if (str.length <= num) return str;
  return str.slice(0,num) + '...';
}

let s = "A-tisket a-tasket A green and yellow basket";
console.log(truncateString(s, s.length));