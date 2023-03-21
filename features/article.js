import { createSlice } from "@reduxjs/toolkit";
const articleSlice = createSlice({
  name: "article",
  initialState: [],
  reducers: {
    setArticle: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setArticle } = articleSlice.actions;
export default articleSlice.reducer;
