import React from "react";

function Item() {
  return (
    <div className="item aspect-3/1 h-fit w-full cursor-pointer rounded-md border-[1px] border-[#333] p-3 sm:w-[calc(50%-0.25rem)] md:w-[calc(33.33%-0.25rem)]">
      <div className="layer-1 h-full w-full">
        <div className="name text-lg font-bold">Kiểm tra 15 phút</div>
        <div className="group flex justify-between">
          <div className="state font-medium text-[#00dd00]">Đang mở</div>
          <div className="date font-thin text-[#999999]">
            16:00 13/2 - 16:30 13/2
          </div>
        </div>
        <div className="quantity float-right mt-2 text-sm font-thin">
          Số thí sinh: 3
        </div>
        <div className="clear-both"></div>
      </div>
    </div>
  );
}

export default Item;
