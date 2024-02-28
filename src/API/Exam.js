import axios from "./axios";

export default class ExamAPI {
  /**
   *
   * @param {object} body
   * @returns {Promise<number> | Promise<exam>}
   */
  static async create(body) {
    const res = await axios.post("/exam/create/", body, {
      validateStatus: () => true,
    });
    const data = res.data;
    if (!data.sucess) {
      return res.status;
    }
    return data.result;
  }

  static async getAll() {
    const res = await axios.get("/exam/get/", {
      validateStatus: () => true,
    });
    const data = res.data;
    if (!data.sucess) {
      return res.status;
    }
    return data.result;
  }

  static async remove(id) {
    const res = await axios.post(
      "/exam/delete",
      { id },
      { validateStatus: () => true },
    );

    return res.data.sucess;
  }

  static async update(body) {
    const res = await axios.post("/exam/update/", body, {
      validateStatus: () => true,
    });
    const data = res.data;

    if (!data.sucess) {
      return res.status;
    }
    return data.result;
  }
}
