export default function getStudentIdsSum(array) {
  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue.id, initialValue,
  );
  return sumWithInitial;
}
