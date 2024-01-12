export default function getBase64(file, setURL) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    setURL(reader.result);
  };
  reader.onerror = function (error) {
    setURL("ERROR");
  };
}
