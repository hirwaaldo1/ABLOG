import { createSlice } from "@reduxjs/toolkit";
const articlesSlice = createSlice({
  name: "articles",
  initialState: [],
  reducers: {
    set: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { set, find } = articlesSlice.actions;
export default articlesSlice.reducer;
