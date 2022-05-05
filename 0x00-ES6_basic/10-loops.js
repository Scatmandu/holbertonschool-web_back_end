export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const idx of array) {
    const toAppend = appendString + array[idx];
    newArray.push(toAppend);
  }

  return newArray;
}
