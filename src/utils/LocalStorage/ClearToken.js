import { setToken } from "../../redux/AuthSlice";

export default function (dispatch) {
  dispatch(setToken(""));
}
