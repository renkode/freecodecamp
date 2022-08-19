function checkSet(arrToBeSet, checkValue){

   // Only change code below this line
   let set = new Set(arrToBeSet);
   if (set.has(checkValue)) return [true, set.size];
   return [false, set.size]
   // Only change code above this line

}