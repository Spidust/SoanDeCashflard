import React from "react";

function Item() {
  return (
    <div className="item w-1/3 rounded-md border-[1px] border-[#333] p-3">
      <div className="layer-1 h-full w-full">
        <div className="name text-lg font-bold">Kiểm tra 15 phút</div>
        <div className="group flex justify-between">
          <div className="state">Đang mở</div>
          <div className="date">16:00 13/2 - 16:30 13/2</div>
        </div>
        <div className="quantity float-right mt-2">Số thí sinh: 3</div>
        <div className="clear-both"></div>
      </div>
    </div>
  );
}

export default Item;
