import store from "../../redux/store";

export default function () {
  const token = store.getState().auth.token;

  window.localStorage.setItem("token", token);
}
