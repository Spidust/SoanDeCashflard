import axios from "./axios";

class UserAPI {
  async get() {
    const res = await axios.get("/auth/");
    const data = res.data;
    if (!data.sucess) {
      return res.status;
    }
    return data.result;
  }
}

export default new UserAPI();
