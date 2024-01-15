export default function customIndexOf(data, name) {
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] == name) {
      console.log(i);
      return i;
    }
  }

  return -1;
}
