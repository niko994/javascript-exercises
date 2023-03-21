
const removeFromArray = function(array, elementToDeleteA, elementToDeleteB) {
    const startA = array.indexOf(elementToDeleteA);
    const startB = array.indexOf(elementToDeleteB);
    const deleteCount = 1;
    let startArray = [startA, startB].filter(index => index !== -1);
    console.log(startArray.reverse())
    for (const i of startArray.reverse()) {
      if (i !== -1) {
        array.splice(i, deleteCount);
      }
    }
    return array;
};*/


/*console.log(removeFromArray([1, 2, 3, 4], 3, 2))*/

/*const removeFromArray = function(array, elementToDeleteA) {
    const start = array.indexOf(elementToDeleteA);
    const deleteCount = 1;
    const removedItems = array.splice(start, deleteCount);
    return array;
}*/



/*const removeFromArray = function(array, positionA, positionB) {
    let positionArray = [positionA,positionB];
    for (const i of positionArray.reverse()) {
        array.splice(i, 1);
}   
    return array
}*/


// Do not edit below this line
module.exports = removeFromArray;
