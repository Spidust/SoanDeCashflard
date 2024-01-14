import React from "react";

function SaveBtn(props) {
  return (
    <div
      className={`${props.className} cursor-pointer rounded-md p-${
        props.padding || "4"
      } text-center ${props.color}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

export default SaveBtn;
