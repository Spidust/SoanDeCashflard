export default function Copy(copyText) {
  navigator.clipboard.writeText(copyText).then(
    () => {
      alert("Sao chép thành công");
    },
    () => {
      alert("Sao chép thất bại");
    },
  );
}
