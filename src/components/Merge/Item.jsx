import React from "react";
import { FaMinus } from "react-icons/fa";

function Item(props) {
  return (
    <div
      className={
        "item cursor pointer flex cursor-pointer border-[1px] border-[#dcdcdc] p-2 hover:bg-[#ccc]" +
        (props.selecting == props.index ? " bg-[#ccc]" : "")
      }
      key={props.index}
      onClick={() => props.select(props.index)}
    >
      <span className="w-[10%] text-center">{props.index}</span>
      <span className="w-[70%] truncate text-center">{props.name}</span>
      <span className="w-[20%] text-center">{props.quantity}</span>
    </div>
  );
}

export default Item;
