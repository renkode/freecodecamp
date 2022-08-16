function convertHTML(str) {
  let conversion = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&apos;"
  }
  let temp = str.split('').map(symbol => {
    if (Object.keys(conversion).includes(symbol)) {
      return conversion[symbol];
    } else {
      return symbol;
    }
  });
  return temp.join('');
}

console.log(convertHTML("Dolce & Gabbana")); //Dolce &amp; Gabbana
console.log(convertHTML('Stuff in "quotation marks"'))