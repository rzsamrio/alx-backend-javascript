import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(`${process.cwd()}/${process.argv[2]}`)
      .then((students) => {
        let result = 'This is the list of our students\n';
        const subjects = [];
        let count = 0;
        for (const [subject, studentList] of Object.entries(students)) {
          count += studentList.length;
          subjects.push(`Number of students in ${subject}: ${studentList.length}. List: ${studentList.join(', ')}`);
        }
        result += `Number of students: ${count}\n`;
        result += subjects.join('\n');
        response.send(result);
      })
      .catch(() => {
        response.statusCode = 500;
        response.send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    readDatabase(process.argv[2])
      .then((students) => {
        if (!(['CS', 'SWE'].includes(major))) {
          console.log(major);
          response.statusCode = 500;
          response.send('Major parameter must be CS or SWE');
        }
        response.send(`List: ${students[major].join(', ')}`);
      })
      .catch(() => {
        response.statusCode = 500;
        response.send('Cannot load the database');
      });
  }
}

export default StudentsController;
