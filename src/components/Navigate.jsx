import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { AiFillCaretUp } from "react-icons/ai";
import { FaHome, FaBookOpen } from "react-icons/fa";
import { BiMerge } from "react-icons/bi";
import { IoLibrary } from "react-icons/io5";

const POSITION = ["/", "/soan-de/", "/soan-de/merge", "/soan-de/library"]

function Navigate() {
  const [position, setPosition] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setPosition(POSITION.indexOf(path))
  }, [location]);
  return (
    <div className="navigate relative mx-auto mb-2 flex w-fit justify-center rounded-md bg-primary px-4 text-white">
      <a href="/" className="cursor-pointer px-5 py-2">
        <FaHome size={30} />
      </a>
      <Link to="/soan-de/" exact className={"cursor-pointer px-5 py-2"}>
        <FaBookOpen size={30} />
      </Link>
      <Link to="/soan-de/merge" exact className={"cursor-pointer px-5 py-2"}>
        {" "}
        <BiMerge size={30} />
      </Link>
      <Link to="/soan-de/library" exact className={"cursor-pointer px-5 py-2"}>
        {" "}
        <IoLibrary size={30} />
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
