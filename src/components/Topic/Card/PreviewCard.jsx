import React from "react";
import { FaCheck } from "react-icons/fa";

function PreviewCard(props) {
  return (
    <div className="card bg-card flex w-4/5 flex-wrap justify-center rounded-xl p-[15px] text-white">
      <img
        src={props.URL}
        alt="image"
        className="image h-auto max-h-[50%] w-auto max-w-full"
      />
      <div className="question w-full text-center text-[1.2rem]">
        {props.question}
      </div>
      <FaCheck fontSize={"2rem"} className="cursor-pointer" />
    </div>
  );
}

export default PreviewCard;
