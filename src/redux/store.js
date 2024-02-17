import { configureStore } from "@reduxjs/toolkit";
import auth from "./AuthSlice";
import user from "./UserSlice";

export default configureStore({
  reducer: {
    auth,
    user,
  },
});
