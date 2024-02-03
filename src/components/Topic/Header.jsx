import React from "react";

function Header(props) {
  return (
    <h2
      className="title flex cursor-pointer select-none items-center rounded-md bg-primary py-2 text-center text-2xl font-bold text-white"
      onClick={props.onClick}
    >
      {props.children}
    </h2>
  );
}

export default Header;
