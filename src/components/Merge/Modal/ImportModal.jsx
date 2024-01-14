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

          <input type="file" id="file-input" accept=".json" />

          <div
            className="export mt-5 w-full cursor-pointer rounded-md bg-primary p-2 text-center"
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
