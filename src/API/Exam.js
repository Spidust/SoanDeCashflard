import axios from "./axios";

export default class ExamAPI {
  /**
   *
   * @param {object} body
   * @returns {Promise<number> | Promise<exam>}
   */
  static async create(body) {
    const res = await axios.post("/exam/create/", body);
    const data = res.data;

    if (!data.sucess) {
      return res.status;
    }
    return data.result;
  }
}
