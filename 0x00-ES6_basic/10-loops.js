export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (let idx of array) {
    const toAppend = appendString + idx
    newArray.push(toAppend);
  }

  return newArray;
}
