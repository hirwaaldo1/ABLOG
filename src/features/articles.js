import { createSlice } from "@reduxjs/toolkit";
const articlesSlice = createSlice({
  name: "articles",
  initialState: [],
  reducers: {
    set: (state, action) => {
      return (state = action.payload);
    },
    find: (state, action) => {
      return action.payload.oldData.filter((article) => {
        return article.title.toLowerCase().includes(action.payload.keyword);
      });
    },
  },
});

export const { set, find } = articlesSlice.actions;
export default articlesSlice.reducer;
