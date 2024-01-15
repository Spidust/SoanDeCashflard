import Validate from "../core/Validate";

export default function concatMergeData(prev, data) {
  const finalData = [...prev];

  for (let i of data) {
    finalData.push([Validate.Name(finalData, i[0]), i[1]]);
  }

  return finalData;
}
