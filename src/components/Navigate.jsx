import React, { useEffect, useState } from "react";
import { AiOutlineMergeCells, AiFillCaretUp } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Navigate() {
  const [position, setPosition] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/");
    if (path[1] == "soan-de") {
      if (path[2] == "merge") {
        setPosition(2);
      } else setPosition(1);
    } else {
      setPosition(0);
    }
  }, [location]);
  return (
    <div className="navigate relative mx-auto my-2 flex w-fit justify-center rounded-md bg-primary px-4 text-white">
      <a href="/" className="topic cursor-pointer px-5 py-2">
        <FaHome size={30} />
      </a>
      <Link to="/soan-de/" exact className={"topic cursor-pointer px-5 py-2"}>
        <FiBookOpen size={30} />
      </Link>
      <Link
        to="/soan-de/merge"
        exact
        className={"topic cursor-pointer px-5 py-2"}
      >
        {" "}
        <AiOutlineMergeCells size={30} />
      </Link>
      <AiFillCaretUp
        style={{
          "--position": position * 70 + 40 + "px",
        }}
        className={`pointer absolute bottom-[-0.5rem] left-0 translate-x-[var(--position)] text-[23px] transition-transform duration-300`}
      />
    </div>
  );
}

export default Navigate;
