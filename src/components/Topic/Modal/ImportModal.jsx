import React, { useEffect, useState } from "react";
import Overlay from "../../Overlay";
import { FaTimes } from "react-icons/fa";

import Validate from "../../../core/Validate";
import WatchFileInput from "../../../utils/WatchFileInput";

function handleImport(data, Import, quit) {
  try {
    data = JSON.parse(data);
    const [key, value] = Object.entries(data)[0];

    data = Validate.Topic(value, 1);
    Import(data);
    quit();
  } catch (e) {
    alert("Đã có lỗi xảy ra");
  }
}

function ImportFileModal(props) {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (document.getElementById("file-input")) {
      WatchFileInput(setInput);
    }
  }, []);
  return (
    <>
      <Overlay />
      <div className="import-modal fixed left-[50%] top-[50%] z-10  h-[50vh] max-h-[250px] w-[90vw] max-w-[400px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-modal p-10 shadow">
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
            placeholder="Nội dung"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <input type="file" id="file-input" />

          <div
            className="export  w-full cursor-pointer rounded-md bg-[#0f8] p-2 text-center"
            onClick={() => handleImport(input, props.importTopic, props.quit)}
          >
            Nhập file
          </div>
        </div>
      </div>
    </>
  );
}

export default ImportFileModal;
