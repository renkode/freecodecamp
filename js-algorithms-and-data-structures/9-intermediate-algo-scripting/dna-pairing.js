//Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.
//for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

function pairElement(str) {
  let temp = str.split('').map(base => {
    let pair;
    switch(base) {
      case "A":
        pair = ["A","T"];
        break;
      case "T":
        pair = ["T","A"];
        break;
      case "G":
        pair = ["G","C"];
        break;
      case "C":
        pair = ["C","G"]; 
        break;
      default:
        break;
    }
     return pair;
  });
  return temp;
}

console.log(pairElement("GCG"));