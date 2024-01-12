import React from "react";
import { FaTimes } from "react-icons/fa";
import Overlay from "../../Overlay";

function SaveFileModal(props) {
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
        <div className="flex flex-wrap items-center justify-center ">
          <h2 className="w-full">Nhập tên bộ đề:</h2>
          <input
            type="text"
            id="fileNameInput"
            className="h-[30px] w-full rounded-sm focus:outline-none"
          />
          <div
            className="export mt-5 w-full cursor-pointer rounded-md bg-primary p-2 text-center"
            onClick={() => {
              props.export(document.getElementById("fileNameInput").value);
              props.quit();
            }}
          >
            Lưu file
          </div>
        </div>
      </div>
    </>
  );
}

export default SaveFileModal;
