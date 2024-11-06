/* eslint-disable */

export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(value) {
    if (typeof (value) === 'string') {
      this._name = value;
    } else throw new TypeError('Name must be a string');
  }

  get name() {
    return this._name;
  }

  set length(value) {
    if (typeof (value) === 'number') {
      this._length = value;
    } else throw new TypeError('Length must be a number');
  }

  get length() {
    return this._length;
  }

  set students(value) {
    if (typeof (value) === 'object') {
      for (const x of value) {
        if (typeof (x) !== 'string') {
          throw new TypeError('Students must be an array of strings');
        }
      }
      this._student = value;
    } else throw new TypeError('Students must be an array of strings');
  }

  get students() {
    return this._students;
  }
}
