import React from "react";
import Button from "../../Button";
import { FaTimes } from "react-icons/fa";

function DeleteModal(props) {
  return (
    <>
      <div className="absolute left-0 top-0 h-[100%] w-full bg-[#0000004d] opacity-30"></div>
      <div className="w-80% fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl border-[2px] border-[solid] border-[white] bg-card p-5 text-white">
        <FaTimes
          className="absolute right-2 top-2 cursor-pointer"
          size={20}
          onClick={props.quit}
        />
        <h3 className="mt-2">Bạn có chắc muốn xóa bộ đề {props.name}</h3>
        <Button
          color="bg-[#ff2b2b]"
          padding="2"
          className="w-full text-white"
          onClick={() => {
            props.remove();
            props.quit();
          }}
        >
          Xóa
        </Button>
      </div>
    </>
  );
}

export default DeleteModal;
