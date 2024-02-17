import axios from "./axios";

export default class UserAPI {
  /**
   *
   * @returns {Promise<number> || Promise<user>}
   */
  static async get() {
    const res = await axios.get("/auth/");
    const data = res.data;
    if (!data.sucess) {
      return res.status;
    }
    return data.result;
  }

  /**
   *
   * @param {string} username
   * @param {string} password
   * @returns {Promise<number> || Promise<string>}
   */
  static async login(username, password) {
    try {
      const res = await axios.post("/auth/login", {
        username,
        password,
      });
      return res.data.token;
    } catch (error) {
      return error.response.status;
    }
  }
  /**
   *
   * @param {string} username
   * @param {string} password
   * @param {string} display_name
   * @returns {Promise<number>|| Promise<string>}
   */
  static async register(username, password, display_name) {
    const res = await axios.post("/auth/register", {
      data: {
        username,
        password,
        display_name,
      },
    });

    if (!data.sucess) {
      if (data.message == "User already exists") return data.message;
      return res.status;
    }
    return data.token;
  }
}
