const http = require('http');

const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  console.log(req.url);
  console.log = (text) => {
    res.write(`${text}\n`);
  };
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents('database.csv')
      .then(() => { res.end(); })
      .catch((err) => { throw err; });
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(port);

module.exports = app;
