const findKeyByValue = function(objectToRead, valueToFind) {
  let keyFound;
  for (const key in objectToRead) {
    if (objectToRead[key] === valueToFind) {
      keyFound = key;
    }
  }
  return keyFound;
};


module.exports = findKeyByValue;