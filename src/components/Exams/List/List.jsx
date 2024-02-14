import React from "react";
import Item from "./Item";

function List() {
  return (
    <div className="list mx-auto mt-4 h-[calc(100%-64px-1rem)] w-4/5 overflow-auto rounded-md border-[1px] border-[#333] p-1">
      <div className="flex flex-wrap gap-1 ">
        <Item
          name="Kiểm tra 15 phút"
          state="Đang mở"
          date="13:00 13/2 - 13:30 14/2"
          quantity="Số thí sinh: 4"
        />
        <Item
          name="Kiểm tra 15 phút"
          state="Đang mở"
          date="13:00 13/2 - 13:30 14/2"
          quantity="Số thí sinh: 4"
        />
        <Item
          name="Kiểm tra 15 phút"
          state="Đang mở"
          date="13:00 13/2 - 13:30 14/2"
          quantity="Số thí sinh: 4"
        />
        <Item
          name="Kiểm tra 15 phút"
          state="Đang mở"
          quantity="Số thí sinh: 4"
        />
      </div>
    </div>
  );
}

export default List;
