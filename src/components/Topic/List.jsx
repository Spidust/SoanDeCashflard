import classNames from "classnames";
import React, { useState } from "react";
import { BiDownArrow, BiRightArrow } from "react-icons/bi";
import { FaPlus, FaMinus } from "react-icons/fa";
function List(props) {
  const [isOpen, setOpen] = useState(true);

  return (
    <div className="list w-full">
      <h2
        className="title flex cursor-pointer select-none items-center rounded-md bg-primary py-2 text-center text-2xl font-bold"
        onClick={(e) => setOpen((prev) => !prev)}
      >
        <span className="flex-1 text-center">
          Danh sách ({props.data.length})
        </span>{" "}
        {isOpen ? (
          <BiDownArrow className="mr-3" />
        ) : (
          <BiRightArrow className="mr-3" />
        )}
      </h2>
      {isOpen && (
        <>
          <div className="control mx-auto mb-3 flex h-[50px] w-full items-center justify-around">
            <div
              className="insert cursor-pointer hover:bg-[#ccc]"
              onClick={props.add}
            >
              <FaPlus size={35} />
            </div>
            <div
              className="remove cursor-pointer hover:bg-[#ccc]"
              onClick={props.remove}
            >
              <FaMinus size={35} />
            </div>
          </div>
          <div className="items mx-auto h-[30vh] w-[80%] animate-slide-out overflow-y-auto">
            {props.data.map((i, index) => {
              return (
                <div
                  className={classNames(
                    "item mt-2 flex cursor-pointer select-none justify-around border-[2px] py-2",
                    { "bg-[#ccc]": index == props.selecting },
                  )}
                  onClick={(e) => {
                    if (index == props.selecting) props.select(null);
                    else props.select(index);
                  }}
                  key={index}
                >
                  <span>{index}</span>
                  <span className="w-[70%] truncate text-center">
                    {i.question}
                  </span>
                  <span>{i.type == 0 ? "Tự luận" : "Trắc nghiệm"}</span>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default List;
