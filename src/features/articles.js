import { createSlice } from "@reduxjs/toolkit";
const articlesSlice = createSlice({
  name: "articles",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({
        id: state[state.length - 1]?.id + 1 || 1,
        title: action.payload.title,
        checked: false,
      });
    },
  },
});

export const { add } = articlesSlice.actions;
export default articlesSlice.reducer;
