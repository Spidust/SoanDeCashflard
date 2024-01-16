export default function customIndexOf(data, name) {
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] == name) {
      return i;
    }
  }

  return -1;
}
