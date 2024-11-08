/* eslint-disable */
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](x) {
    if (x === 'string') {
      return this._location;
    } if (x === 'number') {
      return this._size;
    }
  }
}
