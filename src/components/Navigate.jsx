import React from "react";
import { AiOutlineMergeCells } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { NavLink } from "react-router-dom";
function Navigate() {
  return (
    <div className="navigate mx-auto flex w-fit justify-center rounded-md border-[1px] border-[#ccc]">
      <NavLink
        to="/"
        exact={true}
        className={({ isActive }) =>
          "topic cursor-pointer px-5 py-2 hover:bg-[#a79292] " +
          (isActive ? "bg-[#ccc]" : "")
        }
      >
        <FiBookOpen size={30} />
      </NavLink>
      <NavLink
        to="/merge"
        exact={true}
        className={({ isActive }) =>
          "topic cursor-pointer px-5 py-2 hover:bg-[#a79292] " +
          (isActive ? "bg-[#ccc]" : "")
        }
      >
        {" "}
        <AiOutlineMergeCells size={30} />
      </NavLink>
    </div>
  );
}

export default Navigate;
