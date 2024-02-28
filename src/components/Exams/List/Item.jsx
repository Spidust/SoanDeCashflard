import React from "react";
import { FaTrashCan } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
function Item(props) {
  return (
    <div className="item aspect-3/1 h-fit w-full  rounded-md border-[1px] border-[#333] p-3 sm:w-[calc(50%-0.25rem)] md:w-[calc(33.33%-0.25rem)]">
      <div className="name text-lg font-bold">{props.name}</div>
      <div className="group flex justify-between">
        <div className="state font-medium text-[#00dd00]">{props.state}</div>
        {props.date && (
          <div className="date font-thin text-[#999999]">
            {`${props.date.start_time.getHours()}:${props.date.start_time.getMinutes()} ${props.date.start_time.getDate()}/${props.date.start_time.getMonth()}`}
            {" tới "}
            {`${props.date.end_time.getHours()}:${props.date.end_time.getMinutes()} ${props.date.end_time.getDate()}/${props.date.end_time.getMonth()}`}
          </div>
        )}
      </div>
      <div className="bottom mt-2 flex justify-between font-thin">
        <div className="control flex">
          <FaTrashCan
            className="cursor-pointer text-red-600"
            size={25}
            onClick={() => props.remove(props.id)}
          />
          <FaPen
            className="ml-3 cursor-pointer text-blue-800"
            size={25}
            onClick={() => props.update(props.id)}
          />
        </div>
        {props.quantity}
      </div>
    </div>
  );
}

export default Item;
