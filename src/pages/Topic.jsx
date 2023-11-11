import React from "react";
import List from "./../components/Topic/List";
import Form from "./../components/Topic/Form";
import { useState, useEffect } from "react";

function getBase64(file, setURL) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    setURL(reader.result);
  };
  reader.onerror = function (error) {
    setURL("ERROR");
  };
}

function Topic() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("abc,abc,abc,abc");
  const [type, setType] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(1);
  const [image, setImage] = useState();
  const [selecting, select] = useState(null);
  const [URL, setURL] = useState("");

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
      setRightAnswer(cardList[selecting].rightAnswer);

      if (cardList[selecting].type == "tn") {
        setRightAnswer(cardList.value[selecting].rightAnswer);
      }
    }
  }, [selecting]);

  useEffect(() => {
    if (selecting != null) {
      const newList = cardList.map((i, index) => {
        if (index == selecting) {
          if (type) {
            i = { question, answer, type, rightAnswer };
          } else {
            i = { question, answer, type };
          }
        }

        return i;
      });
      setCardList(newList);
    }
  }, [question, answer, type, rightAnswer]);

  useEffect(() => {
    if (image) {
      getBase64(image, setURL);
    }
  }, [image]);

  return (
    <div className="topic h-[100%]">
      <div className="w-full md:w-1/2">
        <List data={cardList} selecting={selecting} select={select} />
        <Form
          form={{ question, answer, type, rightAnswer, image }}
          setType={setType}
          setAnswer={setAnswer}
          setQuestion={setQuestion}
          setRightAnswer={setRightAnswer}
          setImage={setImage}
        />
      </div>
    </div>
  );
}

export default Topic;
