export default function AnswerProcess(b, f) {
  f = f.split(",");
  let r = 0;
  for (let i = 0; i < f.length; i++)
    if (f[i] == b) {
      r = i;
      break;
    }
  return {
    r,
    a: f.join(","),
  };
}
