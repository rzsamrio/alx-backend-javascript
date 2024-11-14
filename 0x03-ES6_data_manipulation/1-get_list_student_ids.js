export default function getListStudentIds(objects) {
  if (!(Array.isArray(objects))) {
    return [];
  }
  const result = objects.map((object) => object.id);
  return result;
}
