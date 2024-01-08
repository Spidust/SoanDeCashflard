import React, { useEffect, useState } from "react";
import Overlay from "./../../Overlay";
import { FaTimes } from "react-icons/fa";

function WatchFileInput(setFileInput) {
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

function handleImport(data, Import, AnswerProcess, quit) {
  const FinalData = [];
  try {
    data = JSON.parse(data);
    const [key, value] = Object.entries(data)[0];

    for (let i of value) {
      if (i.question && i["answer-f"] && i["answer-b"] && i.type && i.image) {
        const { r, a } = AnswerProcess(i["answer-b"], i["answer-f"]);
        FinalData.push({
          question: i.question,
          answer: a,
          rightAnswer: r,
          type: i.type == "tl" ? 0 : 1,
          URL: i.image,
        });
      }
    }
    Import(FinalData);
    quit();
  } catch (e) {
    alert("Đã có lỗi xảy ra");
    console.log(e);
  }
}

function ImportFileModal(props) {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (document.getElementById("file-input")) {
      WatchFileInput(setInput);
    }
  });
  return (
    <>
      <Overlay />
      <div className="save-file-modal fixed left-[50%] top-[50%] z-10 flex h-[50vh] max-h-[250px] w-[90vw] max-w-[400px] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-md bg-[#4ba8fa] p-10 shadow">
        <FaTimes
          size={30}
          color="red"
          className="absolute right-3 top-2 cursor-pointer"
          onClick={props.quit}
        ></FaTimes>
        <div className="flex flex-wrap items-center">
          <h2 className="w-full">Chọn file hoặc dán nội dung:</h2>
          <input
            type="text"
            className="h-[30px] w-full rounded-sm focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <input type="file" id="file-input" />

          <div
            className="export mt-5 w-full cursor-pointer rounded-md bg-primary p-2 text-center"
            onClick={() =>
              handleImport(
                input,
                props.importTopic,
                props.AnswerProcess,
                props.quit,
              )
            }
          >
            Nhập file
          </div>
        </div>
      </div>
    </>
  );
}

export default ImportFileModal;
