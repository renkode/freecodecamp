const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",  //find this
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];
// myPlants[myPlants.findIndex(plants => plants.type === "trees")].list[1];
console.log(secondTree);