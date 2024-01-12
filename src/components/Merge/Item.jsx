import React from "react";
import { FaMinus } from "react-icons/fa";

function Item(props) {
  return (
    <div className="item cursor pointer flex border-[1px] border-[#dcdcdc] p-2 hover:bg-[#ccc]">
      <span className="w-[10%] text-center">{props.index}</span>
      <span className="w-[65%] truncate text-center">{props.name}</span>
      <span className="w-[10%] text-center">{props.quantity}</span>
      <span className="flex w-[15%] cursor-pointer items-center justify-center">
        <FaMinus size={18} />
      </span>
    </div>
  );
}

export default Item;
