import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Overlay from "../../Overlay";

import WatchFileInput from "../../../utils/WatchFileInput";
import Validate from "./../../../core/Validate";

function HandleImport(data, Import, quit) {
  try {
    data = Object.entries(JSON.parse(data));
    const finalData = [];

    for (let i of data) {
      finalData.push([i[0], Validate.Topic(i[1])]);
    }
    Import(finalData);

    quit();
  } catch (e) {
    alert("Có lỗi đã xảy ra");
    console.error(e);
  }
}

function ImportModal(props) {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (document.getElementById("file-input")) {
      WatchFileInput(setInput);
    }
  });
  return (
    <>
      <Overlay />
      <div className="import-modal fixed left-[50%] top-[50%] z-10 h-[50vh] max-h-[250px] w-[90vw] max-w-[400px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-modal p-10 shadow">
        <FaTimes
          size={30}
          color="red"
          className="absolute right-3 top-2 cursor-pointer"
          onClick={props.quit}
        ></FaTimes>
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="w-full">Chọn file hoặc dán nội dung:</h2>
          <input
            type="text"
            className="w-full rounded-sm p-[10px] focus:outline-none"
            value={input}
            placeholder="Nội dung"
            onChange={(e) => setInput(e.target.value)}
          />

          <input type="file" id="file-input" accept=".json" />

          <div
            className="export w-full cursor-pointer rounded-md bg-[#0f8] p-2 text-center"
            onClick={() => HandleImport(input, props.import, props.quit)}
          >
            Nhập file
          </div>
        </div>
      </div>
    </>
  );
}

export default ImportModal;
