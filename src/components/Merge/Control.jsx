import React from "react";
import Button from "../Button";

function Control(props) {
  return (
    <div className="control mx-auto flex w-full justify-center">
      <Button color="bg-[#ff4949]" onClick={props.import}>
        Nhập
      </Button>
      <Button color="bg-primary" onClick={props.export}>
        Xuất
      </Button>
    </div>
  );
}

export default Control;
