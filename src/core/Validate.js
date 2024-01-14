import AnswerProcess from "../utils/AnswerProcess";

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

  static Topic(topic) {
    const data = [];

    for (let i of topic) {
      if (this.Card(i)) {
        data.push({
          question: i.question,
          "answer-b": i["answer-b"],
          "answer-f": i["answer-f"],
          type: i.type,
          image: i.image,
        });
      }
    }

    return data;
  }
}
