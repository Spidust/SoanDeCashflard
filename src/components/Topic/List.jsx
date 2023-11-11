import classNames from "classnames";
import React, { useState } from "react";
import { BiDownArrow, BiRightArrow } from "react-icons/bi";
function List(props) {
  const [isOpen, setOpen] = useState(true);

  return (
    <div className="list max-h-[40%] w-full">
      <h2
        className="title flex cursor-pointer select-none items-center rounded-md bg-primary py-2 text-center text-2xl font-bold "
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
                <span>{i.question}</span>
                <span>{i.type == 0 ? "Tự luận" : "Trắc nghiệm"}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default List;
