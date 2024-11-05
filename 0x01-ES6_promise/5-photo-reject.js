export default function uploadPhotot(filename) {
  return Promise.reject(Error(`${filename} cannot be processed`));
}
