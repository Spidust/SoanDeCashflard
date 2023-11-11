import React from "react";

function FormAnswerTL(props) {
  return (
    <div className="tl flex w-full">
      <label htmlFor="answer">Trả lời</label>
      <input
        type="text"
        id="answer"
        value={props.answer}
        onChange={(e) => props.setAnswer(e.target.value)}
        className="flex-1 border-[2px] border-black"
      />
    </div>
  );
}

export default FormAnswerTL;
