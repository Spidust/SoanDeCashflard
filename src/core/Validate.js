import AnswerProcess from "../utils/AnswerProcess";

export default class Validate {
  static Card(card) {
    return (
      i.question &&
      i["answer-f"] &&
      i["answer-b"] &&
      (i.type == "tn" || i.type == "tl") &&
      i.image
    );
  }

  static Topic(topic) {
    data = [];

    for (let i of topic) {
      if (this.Card(i)) {
        const { r, a } = AnswerProcess(i["answer-b"], i["answer-f"]);
        data.push({
          question: i.question,
          answer: a,
          rightAnswer: r,
          type: i.type == "tl" ? 0 : 1,
          URL: i.image,
        });
      }
    }

    return data;
  }
}
