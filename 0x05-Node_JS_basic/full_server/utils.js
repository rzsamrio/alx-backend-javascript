const fs = require('fs');

function countStudentsFromData(err, data, resolve, reject) {
  if (err) {
    reject(Error('Cannot load the database'));
    return;
  }
  const fields = [];
  const fieldStudents = {};
  const students = data.toString().split('\n');
  students.shift();
  for (const student of students) {
    const data = student.split(',');
    if (data.length === 4) {
      const firstName = data[0];
      const field = data[3];
      if (fields.includes(field)) {
        fieldStudents[field].push(firstName);
      } else {
        fieldStudents[field] = [firstName];
        fields.push(field);
      }
    }
  }
  resolve(fieldStudents);
}

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      countStudentsFromData(err, data, resolve, reject);
    });
  });
}

module.exports = readDatabase;
