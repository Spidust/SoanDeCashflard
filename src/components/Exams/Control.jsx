import React from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
function Control() {
  return (
    <div className="control mx-auto flex w-fit items-center gap-3 rounded-md bg-primary px-6 py-3 text-white">
      <div className="create-btn h-full cursor-pointer rounded-md px-2 py-2 hover:bg-secondary">
        <FaPlus size={23} />
      </div>
      <input
        type="text"
        placeholder="Tìm kiếm"
        className="search-input rounded-md px-3 py-2 text-black focus:outline-none"
      />
      <div className="search-btn h-full cursor-pointer rounded-md px-2 py-2 hover:bg-secondary">
        <FaSearch size={23} />
      </div>
    </div>
  );
}

export default Control;
