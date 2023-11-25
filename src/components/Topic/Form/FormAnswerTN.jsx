import React from "react";

function FormAnswerTN(props) {
  return (
    <div className="tn flex h-[30vh] w-full flex-wrap">
      {[1, 2, 3, 4].map((i) => (
        <div className="answer h-1/2 flex w-1/2 items-center justify-center border-[1px] border-[#ccc]">
          <input
            type="radio"
            name="answer"
            value={i}
            checked={props.rightAnswer == i}
            id="answer-1"
            onChange={() => {
              if (props.answer[i - 1]) props.setRightAnswer(i);
            }}
          />
          <input
            type="text"
            className="border-[2px] border-black"
            value={props.answer[i - 1]}
            onChange={(e) => props.setAnswer(i - 1, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}

export default FormAnswerTN;
