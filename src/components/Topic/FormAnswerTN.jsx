import React from "react";

function FormAnswerTN(props) {
  return (
    <div className="tn flex h-[30vh] w-full flex-wrap">
      <div className="answer h-1/2 flex w-1/2 items-center justify-center border-[1px] border-[#ccc]">
        <input
          type="radio"
          name="answer"
          value={1}
          checked={props.rightAnswer == 1}
          id="answer-1"
          onChange={(e) => props.setRightAnswer(e.target.value)}
        />
        <input
          type="text"
          className="border-[2px] border-black"
          value={props.answer[0]}
          onChange={(e) => props.setAnswer(0, e.target.value)}
        />
      </div>
      <div className="answer h-1/2 flex w-1/2 items-center justify-center border-[1px] border-[#ccc]">
        <input
          type="radio"
          name="answer"
          value={2}
          checked={props.rightAnswer == 2}
          id="answer-2"
          onChange={(e) => props.setRightAnswer(e.target.value)}
        />
        <input
          type="text"
          className="border-[2px] border-black"
          value={props.answer[1]}
          onChange={(e) => props.setAnswer(1, e.target.value)}
        />
      </div>
      <div className="answer h-1/2 flex w-1/2 items-center justify-center border-[1px] border-[#ccc]">
        <input
          type="radio"
          name="answer"
          value={3}
          checked={props.rightAnswer == 3}
          id="answer-3"
          onChange={(e) => props.setRightAnswer(e.target.value)}
        />
        <input
          type="text"
          className="border-[2px] border-black"
          value={props.answer[2]}
          onChange={(e) => props.setAnswer(2, e.target.value)}
        />
      </div>
      <div className="answer h-1/2 flex w-1/2 items-center justify-center border-[1px] border-[#ccc]">
        <input
          type="radio"
          name="answer"
          value={4}
          checked={props.rightAnswer == 4}
          id="answer-4"
          onChange={(e) => props.setRightAnswer(e.target.value)}
        />
        <input
          type="text"
          className="border-[2px] border-black"
          value={props.answer[3]}
          onChange={(e) => props.setAnswer(3, e.target.value)}
        />
      </div>
    </div>
  );
}

export default FormAnswerTN;
