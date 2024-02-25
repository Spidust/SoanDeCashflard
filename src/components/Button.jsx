import React from "react";

function Button(props) {
  return (
    <div
      className={`${props.className || ""} cursor-pointer rounded-md ${
        props.padding || "p-3"
      } text-center ${props.color}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

export default Button;
