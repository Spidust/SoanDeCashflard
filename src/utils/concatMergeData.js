function customIndexOf(data, name) {
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] == name) {
      return i;
    }
  }

  return -1;
}

export default function concatMergeData(prev, data) {
  const finalData = [...prev];

  for (let i of data) {
    let j = 0;
    let name = i[0];
    let fname = i[0];

    while (customIndexOf(finalData, fname) > -1) {
      fname = `${name} ${++j}`;
    }

    finalData.push([fname, i[1]]);
  }

  return finalData;
}
