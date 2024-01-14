import React from "react";
import { FaTimes } from "react-icons/fa";

function SelectModal(props) {
  return (
    <div className="absolute bottom-0 left-[50%] flex h-[55%] min-h-[230px] w-[90%] translate-x-[-50%] items-center rounded-xl bg-card p-5">
      <FaTimes
        size={25}
        color="white"
        className="fixed right-1 top-1 cursor-pointer"
        onClick={props.quit}
      />
      <div className="control w-full">
        <div className="w-full cursor-pointer border-[1px] border-[solid] border-[white] p-3 text-center text-white hover:bg-[#1b82e0]">
          Đổi tên
        </div>
        <div
          className="mt-2 w-full cursor-pointer border-[1px] border-[solid] border-[white] p-3 text-center text-white hover:bg-[#1b82e0]"
          onClick={props.delete}
        >
          Xóa
        </div>
        <div className="mt-2 w-full cursor-pointer border-[1px] border-[solid] border-[white] p-3 text-center text-white hover:bg-[#1b82e0]">
          Lưu thành file lẻ
        </div>
        <div className="mt-2 w-full cursor-pointer border-[1px] border-[solid] border-[white] p-3 text-center text-white hover:bg-[#1b82e0]">
          Sao chép vào bộ nhớ tạm
        </div>
      </div>
    </div>
  );
}

export default SelectModal;
