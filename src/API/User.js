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

  async login(username, password) {
    const res = await axios.post("/auth/login", {
      data: {
        username,
        password,
      },
    });
    const data = res.data;

    if (!data.sucess) {
      return res.status;
    }
    return data.result;
  }

  async register(username, password, display_name) {
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
    return data.result;
  }
}

export default new UserAPI();
