import React from "react";
import FormAnswerTL from "./FormAnswerTL";
import FormAnswerTN from "./FormAnswerTN";

function Form(props) {
  return (
    <div className="form flex min-h-[40vh] w-full flex-col justify-around px-2">
      <h2 className="title flex w-full cursor-pointer select-none items-center justify-center rounded-md bg-primary py-2 text-center text-2xl font-bold">
        <span>Nhập liệu</span>
      </h2>
      <div className="question flex w-full">
        <label htmlFor="question">Câu hỏi: </label>
        <input
          type="text"
          id="question"
          className="flex-1 border-[2px] border-black"
          value={props.form.question}
          onChange={(e) => props.setQuestion(e.target.value)}
        />
      </div>
      <div className="type flex w-full">
        <input
          type="radio"
          id="tl"
          name="type"
          value={0}
          checked={props.form.type == 0}
          onChange={(e) => props.setType(Number(e.target.value))}
        />
        <label htmlFor="tl">Tự luận</label>

        <input
          type="radio"
          id="tn"
          name="type"
          value={1}
          checked={props.form.type == 1}
          onChange={(e) => props.setType(Number(e.target.value))}
          className="ml-10"
        />
        <label htmlFor="tn">Trắc nghiệm</label>
      </div>
      <div className="answer">
        {props.form.type == 0 ? (
          <FormAnswerTL
            answer={props.form.answer}
            setAnswer={props.setAnswer}
          />
        ) : props.form.type == 1 ? (
          <FormAnswerTN
            answer={props.form.answer.split(",")}
            rightAnswer={props.form.rightAnswer}
            setRightAnswer={props.setRightAnswer}
            setAnswer={(index, value) =>
              props.setAnswer((prev) => {
                const answerArr = prev.split(",");
                answerArr[index] = value;
                return answerArr.join(",");
              })
            }
          />
        ) : null}
      </div>
      <div className="image">
        <label htmlFor="image">Hình ảnh: </label>
        <input
          type="file"
          onChange={(e) => {
            props.setImage(e.target.files[0]);
            e.target.value = "";
          }}
          accept="image/*"
          id="image"
        />
      </div>
    </div>
  );
}

export default Form;
