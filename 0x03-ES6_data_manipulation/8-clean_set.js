export default function cleanSet(set, startString) {
  const newArray = [];
  for (const element of set) {
    if (element.startsWith(startString)) {
      newArray.push(element.slice(startString.length));
    }
  }
  if (startString === '') {
    return '';
  }
  return newArray.join('-');
}
