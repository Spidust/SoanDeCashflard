import React from "react";
import FormAnswerTL from "./FormAnswerTL";
import FormAnswerTN from "./FormAnswerTN";
import FormSound from "./FormSound";
import Header from "../Header";

function Form(props) {
  return (
    <div className="form flex min-h-[40vh] w-full flex-col justify-around px-2">
      <Header>
        <span className="flex w-full justify-center">Nhập liệu</span>
      </Header>
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

        <input
          type="checkbox"
          className="ml-10 h-[20px] w-[20px]"
          checked={props.form.sound}
          onChange={(e) => props.setSound(e.target.checked)}
          id="sound"
        />
        <label htmlFor="sound" className="ml-[4px]">
          Âm thanh
        </label>
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
      <div className="sound">
        {props.form.sound ? (
          <FormSound
            lang={props.form.lang}
            setLang={props.setLang}
            sentence={props.form.sentence}
            setSentence={props.setSentence}
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
