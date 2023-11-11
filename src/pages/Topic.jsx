import React from "react";
import List from "./../components/Topic/List";
import Form from "./../components/Topic/Form";
import { useState, useEffect, useReducer } from "react";

function Topic() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("abc,abc,abc,abc");
  const [type, setType] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(0);
  const [selecting, select] = useState(null);

  const [cardList, setCardList] = useState([
    {
      question: "Abc",
      answer: "ABC",
      type: 0,
    },
    {
      question: "Abc",
      answer: "ABC",
      type: 0,
    },
  ]);

  useEffect(() => {
    if (selecting != null) {
      setQuestion(cardList[selecting].question);
      setAnswer(cardList[selecting].answer);
      setType(cardList[selecting].type);

      if (cardList[selecting].type == "tn") {
        setRightAnswer(cardList.value[selecting].rightAnswer);
      }
    }
  }, [selecting]);

  useEffect(() => {
    if (selecting != null) {
      const newList = cardList.map((i, index) => {
        if (index == selecting) {
          i = { question, answer, type };
        }

        return i;
      });
      setCardList(newList);
    }
  }, [question, answer, type]);

  return (
    <div className="topic h-[100%]">
      <div className="w-full md:w-1/2">
        <List data={cardList} selecting={selecting} select={select} />
        <Form
          form={{ question, answer, type, rightAnswer }}
          setType={setType}
          setAnswer={setAnswer}
          setQuestion={setQuestion}
          setRightAnswer={setRightAnswer}
        />
      </div>
    </div>
  );
}

export default Topic;
