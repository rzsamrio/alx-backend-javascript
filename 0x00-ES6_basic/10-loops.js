export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, values] of array.entries()) {
    array[idx] = appendString + values;	/* eslint-disable-line */
  }

  return array;
}
