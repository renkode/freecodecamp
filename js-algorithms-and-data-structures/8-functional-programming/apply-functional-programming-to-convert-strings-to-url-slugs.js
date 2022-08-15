// Only change code below this line
function urlSlug(title) {
  let lowercase = title.split(" ")
    .filter(word => word.length > 0) // remove any extra spaces
    .map(word => word.toLowerCase());
  return lowercase.join("-");
}
// Only change code above this line
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));