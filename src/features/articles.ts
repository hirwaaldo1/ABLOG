import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Article } from "interfaces/articles";
const articlesSlice = createSlice({
  name: "articles",
  initialState: [],
  reducers: {
    setArticles: (state: Array<Article>, action: PayloadAction<Article[]>) => {
      return (state = action.payload);
    },
  },
});

export const { setArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
