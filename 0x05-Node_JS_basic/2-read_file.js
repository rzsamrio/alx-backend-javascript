const fs = require('fs');

function countStudents(path) {
  const fields = [];
  const fieldStudents = {};
  let students;
  try {
    const data = fs.readFileSync(path);
    students = data.toString().split('\n');
    students.shift();
  } catch (err) {
    throw Error('Cannot load the database');
  }
  console.log(`Number of students: ${students.length - 1}`);
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
  for (const field of fields) {
    const students = fieldStudents[field];
    console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
  }
}

module.exports = countStudents;
