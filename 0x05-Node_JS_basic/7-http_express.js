const fs = require('fs');

function countStudentsFromData(err, data, resolve, reject, res) {
  if (err) {
    reject(Error('Cannot load the database'));
    return;
  }
  const fields = [];
  const fieldStudents = {};
  const students = data.toString().split('\n');
  students.shift();
  let body = (`Number of students: ${students.length - 1}\n`);
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
    body += (`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
  }
  res.send(body);
  resolve();
}

function countStudents(path, res) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      countStudentsFromData(err, data, resolve, reject, res);
    });
  });
}

const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2], res).then(() => {
    res.end();
  });
});

app.listen(port);

module.exports = app;
