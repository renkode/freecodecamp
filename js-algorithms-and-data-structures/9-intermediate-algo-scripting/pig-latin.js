function translatePigLatin(str) {
  const vowelRegex = /^[aeiou]$/i;
  if (str[0].match(vowelRegex)) {
    return str + "way";
  } else {
    let index = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(vowelRegex)) {
        index = i;
        break;
      }
    };
    return str.slice(index) + str.slice(0,index) + "ay"
  }
}

console.log(translatePigLatin("glove"));