import AnswerProcess from "../utils/AnswerProcess";
import customIndexOf from "../utils/customIndexOf";
export default class Validate {
  static Card(card) {
    return (
      card.question &&
      card["answer-f"] &&
      card["answer-b"] &&
      (card.type == "tn" || card.type == "tl") &&
      card.image
    );
  }

  static Topic(topic, mode = 0) {
    const data = [];

    if (mode == 0) {
      for (let i of topic) {
        if (this.Card(i)) {
          let t = {
            question: i.question,
            "answer-b": i["answer-b"],
            "answer-f": i["answer-f"],
            type: i.type,
            image: i.image,
          };
          if (i.sentence && i.lang) {
            t = { ...t, sentence: i.sentence, lang: i.lang };
          }
          data.push(t);
        }
      }
    } else if (mode == 1) {
      for (let i of topic) {
        if (this.Card(i)) {
          let rightAnswer, answer, type;

          if (i.type == "tn") {
            const { r, a } = AnswerProcess(i["answer-b"], i["answer-f"]);
            rightAnswer = r;
            answer = a;
            type = 1;
          } else if (i.type == "tl") {
            rightAnswer = i["answer-b"];
            answer = i["answer-f"];
            type = 0;
          }

          let t = {
            question: i.question,
            rightAnswer,
            answer,
            type,
            URL: i.image,
          };

          if (i.sentence && i.lang) {
            t = { ...t, sentence: i.sentence, lang: i.lang };
          }
          data.push(t);
        }
      }
    }

    return data;
  }

  static Name(data, name) {
    let j = 0;
    let fname = name;

    while (customIndexOf(data, fname) > -1) {
      fname = `${name} ${++j}`;
    }

    return fname;
  }
}
