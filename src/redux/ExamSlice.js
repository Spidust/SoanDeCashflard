import { createSlice } from "@reduxjs/toolkit";

const examSlice = createSlice({
  name: "exam",
  initialState: {
    list: [],
  },
  reducers: {
    pushExam: (state, action) => {
      state.list.push(action.payload);
    },
    removeExam: (state, action) => {
      state.list.splice(action.payload, 1);
    },
    replaceExam: (state, action) => {
      const index = state.list.IndexOfObject("id", action.payload.id);
      state.list[index] = action.payload.new;
    },
    setExamList: (state, action) => {
      if (action.payload instanceof Array) state.list = action.payload;
    },
  },
});

export const { pushExam, removeExam, replaceExam, setExamList } =
  examSlice.actions;

export default examSlice.reducer;
