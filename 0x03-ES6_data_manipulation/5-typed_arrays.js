export default function createInt8TypedArray(length, position, value) {
  if (position > length) throw Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  new Int8Array(buffer)[position] = value;
  return new DataView(buffer, 0);
}
