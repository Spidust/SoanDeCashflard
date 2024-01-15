import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Button from "../../Button";

export default function RenameModal(props) {
  const [input, setInput] = useState("");

  return (
    <>
      <div className="absolute left-0 top-0 h-[100%] w-full bg-[#0000004d] opacity-30"></div>
      <div className="w-80% fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl border-[2px] border-[solid] border-[white] bg-card p-5 text-white">
        <FaTimes
          className="absolute right-2 top-2 cursor-pointer"
          size={20}
          onClick={props.quit}
        />
        <h3 className="mt-2">
          Nhập tên bạn muốn thay đổi cho bộ đề {props.name}
        </h3>
        <input
          type="text"
          className="h-[30px] w-full rounded-sm text-black focus:outline-none"
          id="renameInput"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <Button
          color="bg-primary"
          padding="2"
          className="w-full text-white"
          onClick={() => {
            props.rename(input);
            props.quit();
          }}
        >
          Đổi tên
        </Button>
      </div>
    </>
  );
}
