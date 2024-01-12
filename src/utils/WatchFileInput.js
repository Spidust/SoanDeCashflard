export default function WatchFileInput(setFileInput) {
  function onChange(event) {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
  }

  function onReaderLoad(event) {
    setFileInput(event.target.result);
  }

  document.getElementById("file-input").addEventListener("change", onChange);
}
