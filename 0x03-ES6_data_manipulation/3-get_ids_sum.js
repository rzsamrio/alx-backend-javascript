export default function getStudentIdsSum(students) {
  const ids = students.map((student) => student.id);
  const sum = ids.reduce((acc, curr) => acc + curr);
  return sum;
}
