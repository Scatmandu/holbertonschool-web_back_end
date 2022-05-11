export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }

  const newArray = [];

  for (const element of set) {
    if (element.startsWith(startString) && typeof element === 'string') {
      newArray.push(element.slice(startString.length));
    }
  }
  return newArray.join('-');
}
