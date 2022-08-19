function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let newArr = arr.map(obj => {
    let orbital = Math.round(2 * Math.PI * Math.sqrt((Math.pow(obj.avgAlt + earthRadius,3)) / GM));
    return {
      name: obj.name,
      orbitalPeriod: orbital
    }
  });
  return newArr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));