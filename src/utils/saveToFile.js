export default function saveToFile(s, name, extension) {
  const link = document.createElement("a");
  const file = new Blob([s], { type: "text/plain" });
  link.href = URL.createObjectURL(file);
  link.download = name + "." + extension;
  link.click();
  URL.revokeObjectURL(link.href);
}
