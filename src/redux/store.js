import { configureStore } from "@reduxjs/toolkit";
import auth from "./AuthSlice";
import user from "./UserSlice";
import exam from "./ExamSlice";
export default configureStore({
  reducer: {
    auth,
    user,
    exam,
  },
});
