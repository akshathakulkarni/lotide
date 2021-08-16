const without = function(source, itemsToRemove) {
  let finalResult = [];
  for (let element of source) {
    finalResult.push(element);
  }
  for (let i = 0; i < finalResult.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === finalResult[i]) {
        finalResult.splice(i, 1);
        i--;
      }
    }
  }
  
  return finalResult;
};

module.exports = without;
