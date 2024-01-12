import React from "react";

function SaveBtn(props) {
  return (
    <div
      className={`cursor-pointer rounded-md p-4 ${props.color}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

export default SaveBtn;
