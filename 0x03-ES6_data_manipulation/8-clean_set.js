export default function cleanSet(set, startString) {
  const newArray = [];
  for (const element of set) {
    if (element.startsWith(startString) && typeof element === 'string') {
      newArray.push(element.slice(startString.length));
    }
  }
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  return newArray.join('-');
}
